#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cut')
  .description("")
  .param('-b, --bytes=LIST', `-b, --bytes=LIST`)
	.param('-c, --characters=LIST', `-c, --characters=LIST`)
	.param('-d, --delimiter=DELIM', `-d, --delimiter=DELIM`)
	.param('-f, --fields=LIST', `-f, --fields=LIST`)
	.param('-s option is specified', `-s option is specified`)
	.param('-n     (ignored)', `-n     (ignored)`)
	.param('--complement', `complement  the set of selected bytes, characters`)
	.param('-s, --only-delimited', `-s, --only-delimited`)
	.param('--output-delimiter=STRING', `use STRING as the output delimiter the default is`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-M     from  first to M'th (included) byte, character or', `-M     from  first to M'th (included) byte, character or`)
  .action(() => execute('cut', args))
    
    