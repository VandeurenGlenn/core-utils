#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('expand')
  .description("")
  .option('-i, --initial', `-i, --initial`)
	.option('-t, --tabs=NUMBER', `-t, --tabs=NUMBER`)
	.option('-t, --tabs=LIST', `-t, --tabs=LIST`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('expand', args))
    
    