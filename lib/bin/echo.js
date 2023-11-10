#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('echo')
  .description("")
  .param('-n     do not output the trailing newline', `-n     do not output the trailing newline`)
	.param('-e     enable interpretation of backslash escapes', `-e     enable interpretation of backslash escapes`)
	.param('-E     disable  interpretation  of   backslash   escapes', `-E     disable  interpretation  of   backslash   escapes`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('echo', args))
    
    