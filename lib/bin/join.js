#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('join')
  .description("")
  .param('-a FILENUM', `-a FILENUM`)
	.param('-e EMPTY', `-e EMPTY`)
	.param('-i, --ignore-case ignore differences in case  when  com-', `-i, --ignore-case ignore differences in case  when  com-`)
	.param('-j FIELD', `-j FIELD`)
	.param('-o FORMAT', `-o FORMAT`)
	.param('-t CHAR', `-t CHAR`)
	.param('-v FILENUM', `-v FILENUM`)
	.param('-1 FIELD', `-1 FIELD`)
	.param('-2 FIELD', `-2 FIELD`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('join', args))
    
    