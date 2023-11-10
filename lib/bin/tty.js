#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tty')
  .description("")
  .param('-s, --silent, --quiet', `-s, --silent, --quiet`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('tty', args))
    
    