#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('id')
  .description("")
  .option('-a     ignore, for compatibility with other versions', `-a     ignore, for compatibility with other versions`)
	.option('-g, --group', `-g, --group`)
	.option('-G, --groups', `-G, --groups`)
	.option('-n, --name', `-n, --name`)
	.option('-r, --real', `-r, --real`)
	.option('-u, --user', `-u, --user`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('id', args))
    
    