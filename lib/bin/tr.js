#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tr')
  .description("")
  .option('-c, -C, --complement', `-c, -C, --complement`)
	.option('-d, --delete', `-d, --delete`)
	.option('-s, --squeeze-repeats', `-s, --squeeze-repeats`)
	.option('-t, --truncate-set1', `-t, --truncate-set1`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('tr', args))
    
    