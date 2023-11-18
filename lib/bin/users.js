#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('users')
  .description("")
  .option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('users', args))
    
    