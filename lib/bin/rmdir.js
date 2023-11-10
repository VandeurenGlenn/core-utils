#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('rmdir')
  .description("")
  .param('--ignore', ``)
	.param('-p, --parents', `-p, --parents`)
	.param('-p a/b/c' is similar to `rmdir a/b/c a/b a'.', `-p a/b/c' is similar to `rmdir a/b/c a/b a'.`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('rmdir', args))
    
    