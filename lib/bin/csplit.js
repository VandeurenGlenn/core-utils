#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('csplit')
  .description("")
  .param('-b, --suffix-format=FORMAT use sprintf FORMAT instead of', `-b, --suffix-format=FORMAT use sprintf FORMAT instead of`)
	.param('-f, --prefix=PREFIX', `-f, --prefix=PREFIX`)
	.param('-k, --keep-files', `-k, --keep-files`)
	.param('-n, --digits=DIGITS', `-n, --digits=DIGITS`)
	.param('-s, --quiet, --silent', `-s, --quiet, --silent`)
	.param('-z, --elide-empty-files', `-z, --elide-empty-files`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('csplit', args))
    
    