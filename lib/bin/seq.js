#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('seq')
  .description("")
  .option('-f, --format=FORMAT', `-f, --format=FORMAT`)
	.option('-s, --separator=STRING', `-s, --separator=STRING`)
	.option('-w, --equal-width', `-w, --equal-width`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('seq', args))
    
    