#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('pinky')
  .description("")
  .param('-l     produce  long  format  output  for  the specified', `-l     produce  long  format  output  for  the specified`)
	.param('-b     omit the user's home directory and shell in  long', `-b     omit the user's home directory and shell in  long`)
	.param('-h     omit the user's project file in long format', `-h     omit the user's project file in long format`)
	.param('-p     omit the user's plan file in long format', `-p     omit the user's plan file in long format`)
	.param('-s     do short format output, this is the default', `-s     do short format output, this is the default`)
	.param('-f     omit the line of column headings in short format', `-f     omit the line of column headings in short format`)
	.param('-w     omit the user's full name in short format', `-w     omit the user's full name in short format`)
	.param('-i     omit  the  user's  full  name  and remote host in', `-i     omit  the  user's  full  name  and remote host in`)
	.param('-q     omit the user's full name, remote host  and  idle', `-q     omit the user's full name, remote host  and  idle`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('pinky', args))
    
    