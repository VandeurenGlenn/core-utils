#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('split')
  .description("")
  .option('-a, --suffix-length=N', `-a, --suffix-length=N`)
	.option('-b, --bytes=SIZE', `-b, --bytes=SIZE`)
	.option('-C, --line-bytes=SIZE', `-C, --line-bytes=SIZE`)
	.option('-d, --numeric-suffixes', `-d, --numeric-suffixes`)
	.option('-l, --lines=NUMBER', `-l, --lines=NUMBER`)
	.option('--verbose', `print a diagnostic to standard error just  before`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('split', args))
    
    