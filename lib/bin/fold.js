#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('fold')
  .description("")
  .param('-b, --bytes', `-b, --bytes`)
	.param('-s, --spaces', `-s, --spaces`)
	.param('-w, --width=WIDTH', `-w, --width=WIDTH`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('fold', args))
    
    