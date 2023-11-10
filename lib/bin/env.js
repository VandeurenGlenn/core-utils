#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('env')
  .description("")
  .param('-i, --ignore-environment', `-i, --ignore-environment`)
	.param('-u, --unset=NAME', `-u, --unset=NAME`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('env', args))
    
    