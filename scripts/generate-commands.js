import { join, parse } from "path";
import { BIN_PATH, downloadCommands, extract, shouldDownload, shouldExtract, shouldExtractManual } from "./../lib/utils.js";
import { readFile, readdir, writeFile } from 'fs/promises'
import readline from 'readline/promises'
import { createReadStream } from "fs";
import events from "events";

await shouldDownload() && await downloadCommands(false)
await shouldExtract() && await extract('./bin', {
  filter: file => file.path.startsWith('bin'),
  map: file => {
    file.path = file.path.replace('bin', '')
    return file
  }
})

await shouldExtractManual() && await extract('./man', {
  filter: file => file.path.startsWith('man/cat1/'),
  map: file => {
    file.path = file.path.replace('man/cat1', '')
    return file
  }
})

const exes = await readdir(BIN_PATH)

console.log(exes)
const packageJSON = JSON.parse((await readFile('package.json')).toString())
const bin = {}

const readLines = async (input) => {
  let value = ''
  let description = ''
  const params = []
  try {
    const rl = readline.createInterface({
      input: createReadStream(input),
      crlfDelay: Infinity
    });
    let open = false
    
    let param = {}
    let paramOpen = false

    rl.on('line', (line) => {
      if (line.includes('AUTHOR')) {
        open = false
      }
      if (open && !paramOpen) {
        
        if (line.trim().startsWith('-') || line.trim().startsWith('--')) {
          paramOpen = true
          param = {}
          param.param = line.trim()
          
        } else {
          description += `${line.trim()}\n`
        }
        
      }
      if (paramOpen && !line.trim().startsWith('-') || paramOpen && !line.trim().startsWith('--')) {
        paramOpen = false
        param.description = line.trim()
            
        params.push(param)
      }
      if (line.includes(`DESCRIPTION`)) {
        open = true
        // value += `${line.trim()}\n`
      }
    });

    await events.once(rl, 'close');
    
  } catch (err) {
    console.error(err);
  }
  return {description, params}
}

for (const exe of exes) {
  const name = parse(exe).name
  bin[name] = `./lib/bin/${name}.js`
  let result = {}
  try {
    
    result = await readLines(`./man/${name}.1.txt`)
    // console.log(result);
    for (const param of result.params) {
      if (param.description.length === 0) {
        let match
        if (param.param.startsWith('--')) {
          match = param.param.match(/\-\-([a-z])\w+/g)
          
        } else {
          match = param.param.match(/\-([a-z])\w+/g)
        }
        
        param.param = match[0]
        param.description = param.description.replace(match[0], 0)
      }
    }
  } catch (error) {
    
  }

  result.params = result.params.filter((param) => !param.param.startsWith('--no-preserve-root') && !param.param.startsWith('--preserve-root'))
  
  const description = ''

  let content = `#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('${name}')
  .description("${description}")
  ${result.params.map(({param, description}) => 
    `.option('${param}', \`${description}\`)`
  ).join('\n\t')}
  .action(() => execute('${name}', args))
    
    `

    await writeFile(join('lib/bin', `${name}.js`), content)

}
packageJSON.bin = bin
await writeFile('package.json', JSON.stringify(packageJSON, null, '\t'))