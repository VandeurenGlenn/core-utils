#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('pinky')
  .description("")
  .option('-l     produce  long  format  output  for  the specified', `-l     produce  long  format  output  for  the specified`)
	.option('-b     omit the user's home directory and shell in  long', `-b     omit the user's home directory and shell in  long`)
	.option('-h     omit the user's project file in long format', `-h     omit the user's project file in long format`)
	.option('-p     omit the user's plan file in long format', `-p     omit the user's plan file in long format`)
	.option('-s     do short format output, this is the default', `-s     do short format output, this is the default`)
	.option('-f     omit the line of column headings in short format', `-f     omit the line of column headings in short format`)
	.option('-w     omit the user's full name in short format', `-w     omit the user's full name in short format`)
	.option('-i     omit  the  user's  full  name  and remote host in', `-i     omit  the  user's  full  name  and remote host in`)
	.option('-q     omit the user's full name, remote host  and  idle', `-q     omit the user's full name, remote host  and  idle`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('pinky', args))
    
    