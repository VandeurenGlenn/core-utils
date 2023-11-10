#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('df')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('-B, --block-size=SIZE use SIZE-byte blocks', `-B, --block-size=SIZE use SIZE-byte blocks`)
	.param('-h, --human-readable', `-h, --human-readable`)
	.param('-H, --si', `-H, --si`)
	.param('-i, --inodes', `-i, --inodes`)
	.param('-k     like --block-size=1K', `-k     like --block-size=1K`)
	.param('-l, --local', `-l, --local`)
	.param('--no-sync', `do  not  invoke  sync  before  getting usage info`)
	.param('-P, --portability', `-P, --portability`)
	.param('--sync', ``)
	.param('-t, --type=TYPE', `-t, --type=TYPE`)
	.param('-T, --print-type', `-T, --print-type`)
	.param('-x, --exclude-type=TYPE', `-x, --exclude-type=TYPE`)
	.param('-v     (ignored)', `-v     (ignored)`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('df', args))
    
    