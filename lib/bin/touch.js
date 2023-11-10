#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('touch')
  .description("")
  .param('-a     change only the access time', `-a     change only the access time`)
	.param('-c, --no-create', `-c, --no-create`)
	.param('-d, --date=STRING', `-d, --date=STRING`)
	.param('-f     (ignored)', `-f     (ignored)`)
	.param('-m     change only the modification time', `-m     change only the modification time`)
	.param('-r, --reference=FILE', `-r, --reference=FILE`)
	.param('-t STAMP', `-t STAMP`)
	.param('--time=WORD', `change the specified time: WORD is access, atime,`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('touch', args))
    
    