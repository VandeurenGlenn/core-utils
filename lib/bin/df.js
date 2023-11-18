#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('df')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('-B, --block-size=SIZE use SIZE-byte blocks', `-B, --block-size=SIZE use SIZE-byte blocks`)
	.option('-h, --human-readable', `-h, --human-readable`)
	.option('-H, --si', `-H, --si`)
	.option('-i, --inodes', `-i, --inodes`)
	.option('-k     like --block-size=1K', `-k     like --block-size=1K`)
	.option('-l, --local', `-l, --local`)
	.option('--no-sync', `do  not  invoke  sync  before  getting usage info`)
	.option('-P, --portability', `-P, --portability`)
	.option('--sync', ``)
	.option('-t, --type=TYPE', `-t, --type=TYPE`)
	.option('-T, --print-type', `-T, --print-type`)
	.option('-x, --exclude-type=TYPE', `-x, --exclude-type=TYPE`)
	.option('-v     (ignored)', `-v     (ignored)`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('df', args))
    
    