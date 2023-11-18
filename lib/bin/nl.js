#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('nl')
  .description("")
  .option('-b, --body-numbering=STYLE', `-b, --body-numbering=STYLE`)
	.option('-d, --section-delimiter=CC', `-d, --section-delimiter=CC`)
	.option('-f, --footer-numbering=STYLE', `-f, --footer-numbering=STYLE`)
	.option('-h, --header-numbering=STYLE', `-h, --header-numbering=STYLE`)
	.option('-i, --page-increment=NUMBER', `-i, --page-increment=NUMBER`)
	.option('-l, --join-blank-lines=NUMBER', `-l, --join-blank-lines=NUMBER`)
	.option('-n, --number-format=FORMAT', `-n, --number-format=FORMAT`)
	.option('-p, --no-renumber', `-p, --no-renumber`)
	.option('-s, --number-separator=STRING', `-s, --number-separator=STRING`)
	.option('-v, --first-page=NUMBER', `-v, --first-page=NUMBER`)
	.option('-w, --number-width=NUMBER', `-w, --number-width=NUMBER`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-fn.   CC  are  two  delimiter characters for separating', `-fn.   CC  are  two  delimiter characters for separating`)
  .action(() => execute('nl', args))
    
    