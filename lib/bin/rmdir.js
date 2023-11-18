#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('rmdir')
  .description("")
  .option('--ignore', ``)
	.option('-p, --parents', `-p, --parents`)
	.option('-p a/b/c' is similar to `rmdir a/b/c a/b a'.', `-p a/b/c' is similar to `rmdir a/b/c a/b a'.`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('rmdir', args))
    
    