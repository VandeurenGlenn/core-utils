#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tr')
  .description("")
  .param('-c, -C, --complement', `-c, -C, --complement`)
	.param('-d, --delete', `-d, --delete`)
	.param('-s, --squeeze-repeats', `-s, --squeeze-repeats`)
	.param('-t, --truncate-set1', `-t, --truncate-set1`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('tr', args))
    
    