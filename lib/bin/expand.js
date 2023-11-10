#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('expand')
  .description("")
  .param('-i, --initial', `-i, --initial`)
	.param('-t, --tabs=NUMBER', `-t, --tabs=NUMBER`)
	.param('-t, --tabs=LIST', `-t, --tabs=LIST`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('expand', args))
    
    