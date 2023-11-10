#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('rm')
  .description("")
  .param('-d, --directory', `-d, --directory`)
	.param('-f, --force', `-f, --force`)
	.param('-i, --interactive', `-i, --interactive`)
	.param('-r, -R, --recursive', `-r, -R, --recursive`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('rm', args))
    
    