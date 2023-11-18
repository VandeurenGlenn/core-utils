#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('paste')
  .description("")
  .option('-d, --delimiters=LIST', `-d, --delimiters=LIST`)
	.option('-s, --serial', `-s, --serial`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('paste', args))
    
    