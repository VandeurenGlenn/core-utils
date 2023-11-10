#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('ptx')
  .description("")
  .param('-A, --auto-reference', `-A, --auto-reference`)
	.param('-C, --copyright', `-C, --copyright`)
	.param('-G, --traditional', `-G, --traditional`)
	.param('-F, --flag-truncation=STRING', `-F, --flag-truncation=STRING`)
	.param('-M, --macro-name=STRING', `-M, --macro-name=STRING`)
	.param('-O, --format=roff', `-O, --format=roff`)
	.param('-R, --right-side-refs', `-R, --right-side-refs`)
	.param('-S, --sentence-regexp=REGEXP', `-S, --sentence-regexp=REGEXP`)
	.param('-T, --format=tex', `-T, --format=tex`)
	.param('-W, --word-regexp=REGEXP', `-W, --word-regexp=REGEXP`)
	.param('-b, --break-file=FILE', `-b, --break-file=FILE`)
	.param('-f, --ignore-case', `-f, --ignore-case`)
	.param('-g, --gap-size=NUMBER', `-g, --gap-size=NUMBER`)
	.param('-i, --ignore-file=FILE', `-i, --ignore-file=FILE`)
	.param('-o, --only-file=FILE', `-o, --only-file=FILE`)
	.param('-r, --references', `-r, --references`)
	.param('-t, --typeset-mode               - not implemented -', `-t, --typeset-mode               - not implemented -`)
	.param('-w, --width=NUMBER', `-w, --width=NUMBER`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('ptx', args))
    
    