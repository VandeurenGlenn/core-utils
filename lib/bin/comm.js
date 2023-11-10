#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('comm')
  .description("")
  .param('-1     suppress lines unique to FILE1', `-1     suppress lines unique to FILE1`)
	.param('-2     suppress lines unique to FILE2', `-2     suppress lines unique to FILE2`)
	.param('-3     suppress lines that appear in both files', `-3     suppress lines that appear in both files`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('comm', args))
    
    