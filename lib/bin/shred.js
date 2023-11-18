#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('shred')
  .description("")
  .option('-f, --force', `-f, --force`)
	.option('-n, --iterations=N', `-n, --iterations=N`)
	.option('-s, --size=N', `-s, --size=N`)
	.option('-u, --remove', `-u, --remove`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('-x, --exact', `-x, --exact`)
	.option('-z, --zero', `-z, --zero`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('shred', args))
    
    