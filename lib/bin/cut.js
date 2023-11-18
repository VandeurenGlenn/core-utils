#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('cut')
  .description("")
  .option('-b, --bytes=LIST', `-b, --bytes=LIST`)
	.option('-c, --characters=LIST', `-c, --characters=LIST`)
	.option('-d, --delimiter=DELIM', `-d, --delimiter=DELIM`)
	.option('-f, --fields=LIST', `-f, --fields=LIST`)
	.option('-s option is specified', `-s option is specified`)
	.option('-n     (ignored)', `-n     (ignored)`)
	.option('--complement', `complement  the set of selected bytes, characters`)
	.option('-s, --only-delimited', `-s, --only-delimited`)
	.option('--output-delimiter=STRING', `use STRING as the output delimiter the default is`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-M     from  first to M'th (included) byte, character or', `-M     from  first to M'th (included) byte, character or`)
  .action(() => execute('cut', args))
    
    