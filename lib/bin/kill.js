#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('kill')
  .description("")
  .option('-s, --signal=SIGNAL, -SIGNAL', `-s, --signal=SIGNAL, -SIGNAL`)
	.option('-l, --list', `-l, --list`)
	.option('-t, --table', `-t, --table`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('kill', args))
    
    