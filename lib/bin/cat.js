#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cat')
  .description("")
  .option('-A, --show-all', `-A, --show-all`)
	.option('-b, --number-nonblank', `-b, --number-nonblank`)
	.option('-e     equivalent to -vE', `-e     equivalent to -vE`)
	.option('-E, --show-ends', `-E, --show-ends`)
	.option('-n, --number', `-n, --number`)
	.option('-s, --squeeze-blank', `-s, --squeeze-blank`)
	.option('-t     equivalent to -vT', `-t     equivalent to -vT`)
	.option('-T, --show-tabs', `-T, --show-tabs`)
	.option('-u     (ignored)', `-u     (ignored)`)
	.option('-v, --show-nonprinting', `-v, --show-nonprinting`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('cat', args))
    
    