#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('touch')
  .description("")
  .option('-a     change only the access time', `-a     change only the access time`)
	.option('-c, --no-create', `-c, --no-create`)
	.option('-d, --date=STRING', `-d, --date=STRING`)
	.option('-f     (ignored)', `-f     (ignored)`)
	.option('-m     change only the modification time', `-m     change only the modification time`)
	.option('-r, --reference=FILE', `-r, --reference=FILE`)
	.option('-t STAMP', `-t STAMP`)
	.option('--time=WORD', `change the specified time: WORD is access, atime,`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('touch', args))
    
    