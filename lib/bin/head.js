#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('head')
  .description("")
  .option('-c, --bytes=[-]N', `-c, --bytes=[-]N`)
	.option('-n, --lines=[-]N', `-n, --lines=[-]N`)
	.option('-q, --quiet, --silent', `-q, --quiet, --silent`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('head', args))
    
    