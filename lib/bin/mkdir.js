#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('mkdir')
  .description("")
  .param('-m, --mode=MODE', `-m, --mode=MODE`)
	.param('- umask', `- umask`)
	.param('-p, --parents', `-p, --parents`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('mkdir', args))
    
    