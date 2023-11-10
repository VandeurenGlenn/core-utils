#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('nl')
  .description("")
  .param('-b, --body-numbering=STYLE', `-b, --body-numbering=STYLE`)
	.param('-d, --section-delimiter=CC', `-d, --section-delimiter=CC`)
	.param('-f, --footer-numbering=STYLE', `-f, --footer-numbering=STYLE`)
	.param('-h, --header-numbering=STYLE', `-h, --header-numbering=STYLE`)
	.param('-i, --page-increment=NUMBER', `-i, --page-increment=NUMBER`)
	.param('-l, --join-blank-lines=NUMBER', `-l, --join-blank-lines=NUMBER`)
	.param('-n, --number-format=FORMAT', `-n, --number-format=FORMAT`)
	.param('-p, --no-renumber', `-p, --no-renumber`)
	.param('-s, --number-separator=STRING', `-s, --number-separator=STRING`)
	.param('-v, --first-page=NUMBER', `-v, --first-page=NUMBER`)
	.param('-w, --number-width=NUMBER', `-w, --number-width=NUMBER`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-fn.   CC  are  two  delimiter characters for separating', `-fn.   CC  are  two  delimiter characters for separating`)
  .action(() => execute('nl', args))
    
    