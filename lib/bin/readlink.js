#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('readlink')
  .description("")
  .option('-f, --canonicalize', `-f, --canonicalize`)
	.option('-e, --canonicalize-existing', `-e, --canonicalize-existing`)
	.option('-m, --canonicalize-missing', `-m, --canonicalize-missing`)
	.option('-n, --no-newline', `-n, --no-newline`)
	.option('-q, --quiet,', `-q, --quiet,`)
	.option('-s, --silent', `-s, --silent`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('readlink', args))
    
    