#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('dircolors')
  .description("")
  .param('-b, --sh, --bourne-shell', `-b, --sh, --bourne-shell`)
	.param('-c, --csh, --c-shell', `-c, --csh, --c-shell`)
	.param('-p, --print-database', `-p, --print-database`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('dircolors', args))
    
    