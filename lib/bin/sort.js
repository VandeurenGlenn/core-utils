#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('sort')
  .description("")
  .param('-b, --ignore-leading-blanks ignore leading blanks', `-b, --ignore-leading-blanks ignore leading blanks`)
	.param('-d, --dictionary-order', `-d, --dictionary-order`)
	.param('-f, --ignore-case', `-f, --ignore-case`)
	.param('-g, --general-numeric-sort', `-g, --general-numeric-sort`)
	.param('-i, --ignore-nonprinting', `-i, --ignore-nonprinting`)
	.param('-M, --month-sort', `-M, --month-sort`)
	.param('-n, --numeric-sort', `-n, --numeric-sort`)
	.param('-r, --reverse', `-r, --reverse`)
	.param('-c, --check', `-c, --check`)
	.param('-k, --key=POS1[,POS2]', `-k, --key=POS1[,POS2]`)
	.param('-m, --merge', `-m, --merge`)
	.param('-o, --output=FILE', `-o, --output=FILE`)
	.param('-s, --stable', `-s, --stable`)
	.param('-S, --buffer-size=SIZE', `-S, --buffer-size=SIZE`)
	.param('-t, --field-separator=SEP use SEP instead  of  non-blank', `-t, --field-separator=SEP use SEP instead  of  non-blank`)
	.param('-T, --temporary-directory=DIR', `-T, --temporary-directory=DIR`)
	.param('-u, --unique', `-u, --unique`)
	.param('-z, --zero-terminated', `-z, --zero-terminated`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('sort', args))
    
    