#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('pathchk')
  .description("")
  .param('-p, --portability', `-p, --portability`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('pathchk', args))
    
    