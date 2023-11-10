#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('mv')
  .description("")
  .param('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.param('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.param('-f, --force', `-f, --force`)
	.param('--reply', ``)
	.param('-i, --interactive', `-i, --interactive`)
	.param('--reply', ``)
	.param('--reply={yes,no,query}', `specify how to handle the prompt about an  exist-`)
	.param('--strip-trailing-slashes  remove  any  trailing  slashes', `from each SOURCE`)
	.param('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.param('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.param('-T, --no-target-directory', `-T, --no-target-directory`)
	.param('-u, --update', `-u, --update`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('mv', args))
    
    