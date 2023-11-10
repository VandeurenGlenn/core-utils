#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('unexpand')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('--first-only  convert  only  leading sequences of blanks', `(overrides -a)`)
	.param('-t, --tabs=N', `-t, --tabs=N`)
	.param('-t, --tabs=LIST', `-t, --tabs=LIST`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('unexpand', args))
    
    