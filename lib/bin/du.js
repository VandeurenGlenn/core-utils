#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('du')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('--apparent-size', `print  apparent  sizes,  rather  than disk usage;`)
	.option('-B, --block-size=SIZE use SIZE-byte blocks', `-B, --block-size=SIZE use SIZE-byte blocks`)
	.option('-b, --bytes', `-b, --bytes`)
	.option('-c, --total', `-c, --total`)
	.option('-D, --dereference-args', `-D, --dereference-args`)
	.option('--files0-from=F', `summarize  disk  usage of the NUL-terminated file`)
	.option('-H     like --si, but also evokes a warning;  will  soon', `-H     like --si, but also evokes a warning;  will  soon`)
	.option('-h, --human-readable', `-h, --human-readable`)
	.option('--si', ``)
	.option('-k     like --block-size=1K', `-k     like --block-size=1K`)
	.option('-l, --count-links', `-l, --count-links`)
	.option('-L, --dereference', `-L, --dereference`)
	.option('-P, --no-dereference', `-P, --no-dereference`)
	.option('-0, --null', `-0, --null`)
	.option('-S, --separate-dirs', `-S, --separate-dirs`)
	.option('-s, --summarize', `-s, --summarize`)
	.option('-x, --one-file-system', `-x, --one-file-system`)
	.option('-X FILE, --exclude-from=FILE', `-X FILE, --exclude-from=FILE`)
	.option('--exclude', ``)
	.option('--max-depth=N', `print  the  total  for a directory (or file, with`)
	.option('--all) only if it is N or fewer levels below  the', `command line argument;  --max-depth=0 is the same`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('du', args))
    
    