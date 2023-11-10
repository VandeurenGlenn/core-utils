#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('paste')
  .description("")
  .param('-d, --delimiters=LIST', `-d, --delimiters=LIST`)
	.param('-s, --serial', `-s, --serial`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('paste', args))
    
    