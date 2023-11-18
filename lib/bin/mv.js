#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('mv')
  .description("")
  .option('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.option('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.option('-f, --force', `-f, --force`)
	.option('--reply', ``)
	.option('-i, --interactive', `-i, --interactive`)
	.option('--reply', ``)
	.option('--reply={yes,no,query}', `specify how to handle the prompt about an  exist-`)
	.option('--strip-trailing-slashes  remove  any  trailing  slashes', `from each SOURCE`)
	.option('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.option('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.option('-T, --no-target-directory', `-T, --no-target-directory`)
	.option('-u, --update', `-u, --update`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('mv', args))
    
    