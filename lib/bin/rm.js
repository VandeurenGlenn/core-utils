#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('rm')
  .description("")
  .option('-d, --directory', `-d, --directory`)
	.option('-f, --force', `-f, --force`)
	.option('-i, --interactive', `-i, --interactive`)
	.option('-r, -R, --recursive', `-r, -R, --recursive`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('rm', args))
    
    