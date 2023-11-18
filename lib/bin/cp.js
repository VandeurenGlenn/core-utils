#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cp')
  .description("")
  .option('-a, --archive', `-a, --archive`)
	.option('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.option('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.option('--copy-contents', `copy contents of special files when recursive`)
	.option('-d     same as --no-dereference --preserve=link', `-d     same as --no-dereference --preserve=link`)
	.option('--no-dereference', `never follow symbolic links`)
	.option('-f, --force', `-f, --force`)
	.option('-i, --interactive', `-i, --interactive`)
	.option('-H     follow command-line symbolic links', `-H     follow command-line symbolic links`)
	.option('-l, --link', `-l, --link`)
	.option('-L, --dereference', `-L, --dereference`)
	.option('-p     same as --preserve=mode,ownership,timestamps', `-p     same as --preserve=mode,ownership,timestamps`)
	.option('--preserve[=ATTR_LIST]', `preserve  the  specified   attributes   (default:`)
	.option('--no-preserve=ATTR_LIST', `don't preserve the specified attributes`)
	.option('--parents', `append source path to DIRECTORY`)
	.option('-P     same as `--no-dereference'', `-P     same as `--no-dereference'`)
	.option('-R, -r, --recursive', `-R, -r, --recursive`)
	.option('--remove-destination', `remove  each  existing  destination  file  before`)
	.option('--reply={yes,no,query}', `specify  how to handle the prompt about an exist-`)
	.option('--sparse=WHEN', `control creation of sparse files`)
	.option('--strip-trailing-slashes  remove  any  trailing  slashes', `from each SOURCE`)
	.option('-s, --symbolic-link', `-s, --symbolic-link`)
	.option('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.option('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.option('-T, --no-target-directory', `-T, --no-target-directory`)
	.option('-u, --update', `-u, --update`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('-x, --one-file-system', `-x, --one-file-system`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('--sparse=auto.   Specify  --sparse=always  to  create  a', `sparse DEST file whenever the  SOURCE  file  contains  a`)
  .action(() => execute('cp', args))
    
    