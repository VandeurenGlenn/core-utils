#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('install')
  .description("")
  .param('--backup[=CONTROL] make a backup of each existing desti-', `nation file`)
	.param('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.param('-c     (ignored)', `-c     (ignored)`)
	.param('-d, --directory', `-d, --directory`)
	.param('-D     create  all leading components of DEST except the', `-D     create  all leading components of DEST except the`)
	.param('-g, --group=GROUP', `-g, --group=GROUP`)
	.param('-m, --mode=MODE', `-m, --mode=MODE`)
	.param('-o, --owner=OWNER', `-o, --owner=OWNER`)
	.param('-p, --preserve-timestamps', `-p, --preserve-timestamps`)
	.param('-s, --strip', `-s, --strip`)
	.param('-S, --suffix=SUFFIX override the usual backup suffix', `-S, --suffix=SUFFIX override the usual backup suffix`)
	.param('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.param('-T, --no-target-directory', `-T, --no-target-directory`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('install', args))
    
    