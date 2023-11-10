#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('stat')
  .description("")
  .param('-f, --file-system', `-f, --file-system`)
	.param('-c  --format=FORMAT', `-c  --format=FORMAT`)
	.param('-L, --dereference', `-L, --dereference`)
	.param('-t, --terse', `-t, --terse`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('--file', ``)
  .action(() => execute('stat', args))
    
    