#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('split')
  .description("")
  .param('-a, --suffix-length=N', `-a, --suffix-length=N`)
	.param('-b, --bytes=SIZE', `-b, --bytes=SIZE`)
	.param('-C, --line-bytes=SIZE', `-C, --line-bytes=SIZE`)
	.param('-d, --numeric-suffixes', `-d, --numeric-suffixes`)
	.param('-l, --lines=NUMBER', `-l, --lines=NUMBER`)
	.param('--verbose', `print a diagnostic to standard error just  before`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('split', args))
    
    