#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('install')
  .description("")
  .option('--backup[=CONTROL] make a backup of each existing desti-', `nation file`)
	.option('-b     like --backup but does not accept an argument', `-b     like --backup but does not accept an argument`)
	.option('-c     (ignored)', `-c     (ignored)`)
	.option('-d, --directory', `-d, --directory`)
	.option('-D     create  all leading components of DEST except the', `-D     create  all leading components of DEST except the`)
	.option('-g, --group=GROUP', `-g, --group=GROUP`)
	.option('-m, --mode=MODE', `-m, --mode=MODE`)
	.option('-o, --owner=OWNER', `-o, --owner=OWNER`)
	.option('-p, --preserve-timestamps', `-p, --preserve-timestamps`)
	.option('-s, --strip', `-s, --strip`)
	.option('-S, --suffix=SUFFIX override the usual backup suffix', `-S, --suffix=SUFFIX override the usual backup suffix`)
	.option('-t, --target-directory=DIRECTORY', `-t, --target-directory=DIRECTORY`)
	.option('-T, --no-target-directory', `-T, --no-target-directory`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('install', args))
    
    