#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('ln')
  .description("")
  .option('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.option('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.option('-d, -F, --directory', `-d, -F, --directory`)
	.option('-f, --force', `-f, --force`)
	.option('-n, --no-dereference', `-n, --no-dereference`)
	.option('-i, --interactive', `-i, --interactive`)
	.option('-s, --symbolic', `-s, --symbolic`)
	.option('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.option('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.option('-T, --no-target-directory', `-T, --no-target-directory`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('ln', args))
    
    