#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('ptx')
  .description("")
  .option('-A, --auto-reference', `-A, --auto-reference`)
	.option('-C, --copyright', `-C, --copyright`)
	.option('-G, --traditional', `-G, --traditional`)
	.option('-F, --flag-truncation=STRING', `-F, --flag-truncation=STRING`)
	.option('-M, --macro-name=STRING', `-M, --macro-name=STRING`)
	.option('-O, --format=roff', `-O, --format=roff`)
	.option('-R, --right-side-refs', `-R, --right-side-refs`)
	.option('-S, --sentence-regexp=REGEXP', `-S, --sentence-regexp=REGEXP`)
	.option('-T, --format=tex', `-T, --format=tex`)
	.option('-W, --word-regexp=REGEXP', `-W, --word-regexp=REGEXP`)
	.option('-b, --break-file=FILE', `-b, --break-file=FILE`)
	.option('-f, --ignore-case', `-f, --ignore-case`)
	.option('-g, --gap-size=NUMBER', `-g, --gap-size=NUMBER`)
	.option('-i, --ignore-file=FILE', `-i, --ignore-file=FILE`)
	.option('-o, --only-file=FILE', `-o, --only-file=FILE`)
	.option('-r, --references', `-r, --references`)
	.option('-t, --typeset-mode               - not implemented -', `-t, --typeset-mode               - not implemented -`)
	.option('-w, --width=NUMBER', `-w, --width=NUMBER`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('ptx', args))
    
    