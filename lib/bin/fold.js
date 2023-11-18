#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('fold')
  .description("")
  .option('-b, --bytes', `-b, --bytes`)
	.option('-s, --spaces', `-s, --spaces`)
	.option('-w, --width=WIDTH', `-w, --width=WIDTH`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('fold', args))
    
    