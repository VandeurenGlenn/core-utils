#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cp')
  .description("")
  .param('-a, --archive', `-a, --archive`)
	.param('--backup[=CONTROL]', `make a backup of each existing destination file`)
	.param('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.param('--copy-contents', `copy contents of special files when recursive`)
	.param('-d     same as --no-dereference --preserve=link', `-d     same as --no-dereference --preserve=link`)
	.param('--no-dereference', `never follow symbolic links`)
	.param('-f, --force', `-f, --force`)
	.param('-i, --interactive', `-i, --interactive`)
	.param('-H     follow command-line symbolic links', `-H     follow command-line symbolic links`)
	.param('-l, --link', `-l, --link`)
	.param('-L, --dereference', `-L, --dereference`)
	.param('-p     same as --preserve=mode,ownership,timestamps', `-p     same as --preserve=mode,ownership,timestamps`)
	.param('--preserve[=ATTR_LIST]', `preserve  the  specified   attributes   (default:`)
	.param('--no-preserve=ATTR_LIST', `don't preserve the specified attributes`)
	.param('--parents', `append source path to DIRECTORY`)
	.param('-P     same as `--no-dereference'', `-P     same as `--no-dereference'`)
	.param('-R, -r, --recursive', `-R, -r, --recursive`)
	.param('--remove-destination', `remove  each  existing  destination  file  before`)
	.param('--reply={yes,no,query}', `specify  how to handle the prompt about an exist-`)
	.param('--sparse=WHEN', `control creation of sparse files`)
	.param('--strip-trailing-slashes  remove  any  trailing  slashes', `from each SOURCE`)
	.param('-s, --symbolic-link', `-s, --symbolic-link`)
	.param('-S, --suffix=SUFFIX', `-S, --suffix=SUFFIX`)
	.param('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.param('-T, --no-target-directory', `-T, --no-target-directory`)
	.param('-u, --update', `-u, --update`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('-x, --one-file-system', `-x, --one-file-system`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('--sparse=auto.   Specify  --sparse=always  to  create  a', `sparse DEST file whenever the  SOURCE  file  contains  a`)
  .action(() => execute('cp', args))
    
    