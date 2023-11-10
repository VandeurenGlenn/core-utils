#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('du')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('--apparent-size', `print  apparent  sizes,  rather  than disk usage;`)
	.param('-B, --block-size=SIZE use SIZE-byte blocks', `-B, --block-size=SIZE use SIZE-byte blocks`)
	.param('-b, --bytes', `-b, --bytes`)
	.param('-c, --total', `-c, --total`)
	.param('-D, --dereference-args', `-D, --dereference-args`)
	.param('--files0-from=F', `summarize  disk  usage of the NUL-terminated file`)
	.param('-H     like --si, but also evokes a warning;  will  soon', `-H     like --si, but also evokes a warning;  will  soon`)
	.param('-h, --human-readable', `-h, --human-readable`)
	.param('--si', ``)
	.param('-k     like --block-size=1K', `-k     like --block-size=1K`)
	.param('-l, --count-links', `-l, --count-links`)
	.param('-L, --dereference', `-L, --dereference`)
	.param('-P, --no-dereference', `-P, --no-dereference`)
	.param('-0, --null', `-0, --null`)
	.param('-S, --separate-dirs', `-S, --separate-dirs`)
	.param('-s, --summarize', `-s, --summarize`)
	.param('-x, --one-file-system', `-x, --one-file-system`)
	.param('-X FILE, --exclude-from=FILE', `-X FILE, --exclude-from=FILE`)
	.param('--exclude', ``)
	.param('--max-depth=N', `print  the  total  for a directory (or file, with`)
	.param('--all) only if it is N or fewer levels below  the', `command line argument;  --max-depth=0 is the same`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('du', args))
    
    