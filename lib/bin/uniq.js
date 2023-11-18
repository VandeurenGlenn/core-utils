#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('uniq')
  .description("")
  .option('-c, --count', `-c, --count`)
	.option('-d, --repeated', `-d, --repeated`)
	.option('-D, --all-repeated[=delimit-method] print all  duplicate', `-D, --all-repeated[=delimit-method] print all  duplicate`)
	.option('-f, --skip-fields=N', `-f, --skip-fields=N`)
	.option('-i, --ignore-case', `-i, --ignore-case`)
	.option('-s, --skip-chars=N', `-s, --skip-chars=N`)
	.option('-u, --unique', `-u, --unique`)
	.option('-w, --check-chars=N', `-w, --check-chars=N`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('uniq', args))
    
    