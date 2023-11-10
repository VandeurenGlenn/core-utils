#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('head')
  .description("")
  .param('-c, --bytes=[-]N', `-c, --bytes=[-]N`)
	.param('-n, --lines=[-]N', `-n, --lines=[-]N`)
	.param('-q, --quiet, --silent', `-q, --quiet, --silent`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('head', args))
    
    