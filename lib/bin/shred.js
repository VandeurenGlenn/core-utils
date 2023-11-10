#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('shred')
  .description("")
  .param('-f, --force', `-f, --force`)
	.param('-n, --iterations=N', `-n, --iterations=N`)
	.param('-s, --size=N', `-s, --size=N`)
	.param('-u, --remove', `-u, --remove`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('-x, --exact', `-x, --exact`)
	.param('-z, --zero', `-z, --zero`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('shred', args))
    
    