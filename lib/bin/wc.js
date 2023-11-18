#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('wc')
  .description("")
  .option('-c, --bytes', `-c, --bytes`)
	.option('-m, --chars', `-m, --chars`)
	.option('-l, --lines', `-l, --lines`)
	.option('-L, --max-line-length', `-L, --max-line-length`)
	.option('-w, --words', `-w, --words`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('wc', args))
    
    