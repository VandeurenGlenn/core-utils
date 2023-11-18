#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('chmod')
  .description("")
  .option('-c, --changes', `-c, --changes`)
	.option('-f, --silent, --quiet', `-f, --silent, --quiet`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--reference=RFILE', `use RFILE's mode instead of MODE values`)
	.option('-R, --recursive', `-R, --recursive`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('chmod', args))
    
    