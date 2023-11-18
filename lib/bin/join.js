#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('join')
  .description("")
  .option('-a FILENUM', `-a FILENUM`)
	.option('-e EMPTY', `-e EMPTY`)
	.option('-i, --ignore-case ignore differences in case  when  com-', `-i, --ignore-case ignore differences in case  when  com-`)
	.option('-j FIELD', `-j FIELD`)
	.option('-o FORMAT', `-o FORMAT`)
	.option('-t CHAR', `-t CHAR`)
	.option('-v FILENUM', `-v FILENUM`)
	.option('-1 FIELD', `-1 FIELD`)
	.option('-2 FIELD', `-2 FIELD`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('join', args))
    
    