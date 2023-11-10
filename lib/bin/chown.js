#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('chown')
  .description("")
  .param('-c, --changes', `-c, --changes`)
	.param('--dereference', `affect the referent of each symbolic link, rather`)
	.param('-h, --no-dereference', `-h, --no-dereference`)
	.param('--from=CURRENT_OWNER:CURRENT_GROUP', `change  the  owner and/or group of each file only`)
	.param('-f, --silent, --quiet', `-f, --silent, --quiet`)
	.param('--reference=RFILE', `use RFILE's owner and group rather than the spec-`)
	.param('-R, --recursive', `-R, --recursive`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('-H     if a command line argument is a symbolic link  to', `-H     if a command line argument is a symbolic link  to`)
	.param('-L     traverse  every  symbolic  link  to  a  directory', `-L     traverse  every  symbolic  link  to  a  directory`)
	.param('-P     do not traverse any symbolic links (default)', `-P     do not traverse any symbolic links (default)`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('chown', args))
    
    