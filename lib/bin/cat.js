#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cat')
  .description("")
  .param('-A, --show-all', `-A, --show-all`)
	.param('-b, --number-nonblank', `-b, --number-nonblank`)
	.param('-e     equivalent to -vE', `-e     equivalent to -vE`)
	.param('-E, --show-ends', `-E, --show-ends`)
	.param('-n, --number', `-n, --number`)
	.param('-s, --squeeze-blank', `-s, --squeeze-blank`)
	.param('-t     equivalent to -vT', `-t     equivalent to -vT`)
	.param('-T, --show-tabs', `-T, --show-tabs`)
	.param('-u     (ignored)', `-u     (ignored)`)
	.param('-v, --show-nonprinting', `-v, --show-nonprinting`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('cat', args))
    
    