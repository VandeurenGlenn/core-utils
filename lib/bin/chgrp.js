#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('chgrp')
  .description("")
  .option('-c, --changes', `-c, --changes`)
	.option('--dereference', `affect the referent of each symbolic link, rather`)
	.option('-h, --no-dereference', `-h, --no-dereference`)
	.option('-f, --silent, --quiet', `-f, --silent, --quiet`)
	.option('--reference=RFILE', `use RFILE's  group  rather  than  the  specifying`)
	.option('-R, --recursive', `-R, --recursive`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('-H     if a command line argument is a symbolic link  to', `-H     if a command line argument is a symbolic link  to`)
	.option('-L     traverse  every  symbolic  link  to  a  directory', `-L     traverse  every  symbolic  link  to  a  directory`)
	.option('-P     do not traverse any symbolic links (default)', `-P     do not traverse any symbolic links (default)`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('chgrp', args))
    
    