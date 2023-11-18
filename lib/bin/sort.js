#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('sort')
  .description("")
  .option('-b, --ignore-leading-blanks ignore leading blanks', `-b, --ignore-leading-blanks ignore leading blanks`)
	.option('-d, --dictionary-order', `-d, --dictionary-order`)
	.option('-f, --ignore-case', `-f, --ignore-case`)
	.option('-g, --general-numeric-sort', `-g, --general-numeric-sort`)
	.option('-i, --ignore-nonprinting', `-i, --ignore-nonprinting`)
	.option('-M, --month-sort', `-M, --month-sort`)
	.option('-n, --numeric-sort', `-n, --numeric-sort`)
	.option('-r, --reverse', `-r, --reverse`)
	.option('-c, --check', `-c, --check`)
	.option('-k, --key=POS1[,POS2]', `-k, --key=POS1[,POS2]`)
	.option('-m, --merge', `-m, --merge`)
	.option('-o, --output=FILE', `-o, --output=FILE`)
	.option('-s, --stable', `-s, --stable`)
	.option('-S, --buffer-size=SIZE', `-S, --buffer-size=SIZE`)
	.option('-t, --field-separator=SEP use SEP instead  of  non-blank', `-t, --field-separator=SEP use SEP instead  of  non-blank`)
	.option('-T, --temporary-directory=DIR', `-T, --temporary-directory=DIR`)
	.option('-u, --unique', `-u, --unique`)
	.option('-z, --zero-terminated', `-z, --zero-terminated`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('sort', args))
    
    