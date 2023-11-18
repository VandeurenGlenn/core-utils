#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('dircolors')
  .description("")
  .option('-b, --sh, --bourne-shell', `-b, --sh, --bourne-shell`)
	.option('-c, --csh, --c-shell', `-c, --csh, --c-shell`)
	.option('-p, --print-database', `-p, --print-database`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('dircolors', args))
    
    