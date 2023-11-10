#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('sum')
  .description("")
  .param('-r     defeat -s, use BSD sum algorithm, use 1K blocks', `-r     defeat -s, use BSD sum algorithm, use 1K blocks`)
	.param('-s, --sysv', `-s, --sysv`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('sum', args))
    
    