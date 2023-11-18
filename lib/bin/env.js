#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('env')
  .description("")
  .option('-i, --ignore-environment', `-i, --ignore-environment`)
	.option('-u, --unset=NAME', `-u, --unset=NAME`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('env', args))
    
    