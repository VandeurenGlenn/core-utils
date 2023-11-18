#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('mkdir')
  .description("")
  .option('-m, --mode=MODE', `-m, --mode=MODE`)
	.option('- umask', `- umask`)
	.option('-p, --parents', `-p, --parents`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('mkdir', args))
    
    