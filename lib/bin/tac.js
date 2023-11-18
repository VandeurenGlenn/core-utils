#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tac')
  .description("")
  .option('-b, --before', `-b, --before`)
	.option('-r, --regex', `-r, --regex`)
	.option('-s, --separator=STRING', `-s, --separator=STRING`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('tac', args))
    
    