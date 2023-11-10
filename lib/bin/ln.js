#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('ln')
  .description("")
  .param('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.param('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.param('-d, -F, --directory', `-d, -F, --directory`)
	.param('-f, --force', `-f, --force`)
	.param('-n, --no-dereference', `-n, --no-dereference`)
	.param('-i, --interactive', `-i, --interactive`)
	.param('-s, --symbolic', `-s, --symbolic`)
	.param('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.param('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.param('-T, --no-target-directory', `-T, --no-target-directory`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('ln', args))
    
    