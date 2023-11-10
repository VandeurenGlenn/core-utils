#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('seq')
  .description("")
  .param('-f, --format=FORMAT', `-f, --format=FORMAT`)
	.param('-s, --separator=STRING', `-s, --separator=STRING`)
	.param('-w, --equal-width', `-w, --equal-width`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('seq', args))
    
    