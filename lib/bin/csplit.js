#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('csplit')
  .description("")
  .option('-b, --suffix-format=FORMAT use sprintf FORMAT instead of', `-b, --suffix-format=FORMAT use sprintf FORMAT instead of`)
	.option('-f, --prefix=PREFIX', `-f, --prefix=PREFIX`)
	.option('-k, --keep-files', `-k, --keep-files`)
	.option('-n, --digits=DIGITS', `-n, --digits=DIGITS`)
	.option('-s, --quiet, --silent', `-s, --quiet, --silent`)
	.option('-z, --elide-empty-files', `-z, --elide-empty-files`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('csplit', args))
    
    