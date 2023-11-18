#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('su')
  .description("")
  .option('-, -l, --login', `-, -l, --login`)
	.option('-c, --commmand=COMMAND', `-c, --commmand=COMMAND`)
	.option('-f, --fast', `-f, --fast`)
	.option('-m, --preserve-environment', `-m, --preserve-environment`)
	.option('-p     same as -m', `-p     same as -m`)
	.option('-s, --shell=SHELL', `-s, --shell=SHELL`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('su', args))
    
    