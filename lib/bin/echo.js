#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('echo')
  .description("")
  .option('-n     do not output the trailing newline', `-n     do not output the trailing newline`)
	.option('-e     enable interpretation of backslash escapes', `-e     enable interpretation of backslash escapes`)
	.option('-E     disable  interpretation  of   backslash   escapes', `-E     disable  interpretation  of   backslash   escapes`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('echo', args))
    
    