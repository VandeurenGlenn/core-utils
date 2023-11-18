#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('comm')
  .description("")
  .option('-1     suppress lines unique to FILE1', `-1     suppress lines unique to FILE1`)
	.option('-2     suppress lines unique to FILE2', `-2     suppress lines unique to FILE2`)
	.option('-3     suppress lines that appear in both files', `-3     suppress lines that appear in both files`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('comm', args))
    
    