#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('unexpand')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('--first-only  convert  only  leading sequences of blanks', `(overrides -a)`)
	.option('-t, --tabs=N', `-t, --tabs=N`)
	.option('-t, --tabs=LIST', `-t, --tabs=LIST`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('unexpand', args))
    
    