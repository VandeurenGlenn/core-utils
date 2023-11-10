#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('kill')
  .description("")
  .param('-s, --signal=SIGNAL, -SIGNAL', `-s, --signal=SIGNAL, -SIGNAL`)
	.param('-l, --list', `-l, --list`)
	.param('-t, --table', `-t, --table`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('kill', args))
    
    