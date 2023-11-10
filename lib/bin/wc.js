#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('wc')
  .description("")
  .param('-c, --bytes', `-c, --bytes`)
	.param('-m, --chars', `-m, --chars`)
	.param('-l, --lines', `-l, --lines`)
	.param('-L, --max-line-length', `-L, --max-line-length`)
	.param('-w, --words', `-w, --words`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('wc', args))
    
    