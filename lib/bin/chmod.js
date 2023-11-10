#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('chmod')
  .description("")
  .param('-c, --changes', `-c, --changes`)
	.param('-f, --silent, --quiet', `-f, --silent, --quiet`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--reference=RFILE', `use RFILE's mode instead of MODE values`)
	.param('-R, --recursive', `-R, --recursive`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('chmod', args))
    
    