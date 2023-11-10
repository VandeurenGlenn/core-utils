#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('readlink')
  .description("")
  .param('-f, --canonicalize', `-f, --canonicalize`)
	.param('-e, --canonicalize-existing', `-e, --canonicalize-existing`)
	.param('-m, --canonicalize-missing', `-m, --canonicalize-missing`)
	.param('-n, --no-newline', `-n, --no-newline`)
	.param('-q, --quiet,', `-q, --quiet,`)
	.param('-s, --silent', `-s, --silent`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('readlink', args))
    
    