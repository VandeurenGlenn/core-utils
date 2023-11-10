#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('su')
  .description("")
  .param('-, -l, --login', `-, -l, --login`)
	.param('-c, --commmand=COMMAND', `-c, --commmand=COMMAND`)
	.param('-f, --fast', `-f, --fast`)
	.param('-m, --preserve-environment', `-m, --preserve-environment`)
	.param('-p     same as -m', `-p     same as -m`)
	.param('-s, --shell=SHELL', `-s, --shell=SHELL`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('su', args))
    
    