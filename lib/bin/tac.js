#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tac')
  .description("")
  .param('-b, --before', `-b, --before`)
	.param('-r, --regex', `-r, --regex`)
	.param('-s, --separator=STRING', `-s, --separator=STRING`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('tac', args))
    
    