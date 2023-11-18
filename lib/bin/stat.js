#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('stat')
  .description("")
  .option('-f, --file-system', `-f, --file-system`)
	.option('-c  --format=FORMAT', `-c  --format=FORMAT`)
	.option('-L, --dereference', `-L, --dereference`)
	.option('-t, --terse', `-t, --terse`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('--file', ``)
  .action(() => execute('stat', args))
    
    