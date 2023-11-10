#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tee')
  .description("")
  .param('-a, --append', `-a, --append`)
	.param('-i, --ignore-interrupts', `-i, --ignore-interrupts`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('tee', args))
    
    