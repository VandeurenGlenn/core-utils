#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('uniq')
  .description("")
  .param('-c, --count', `-c, --count`)
	.param('-d, --repeated', `-d, --repeated`)
	.param('-D, --all-repeated[=delimit-method] print all  duplicate', `-D, --all-repeated[=delimit-method] print all  duplicate`)
	.param('-f, --skip-fields=N', `-f, --skip-fields=N`)
	.param('-i, --ignore-case', `-i, --ignore-case`)
	.param('-s, --skip-chars=N', `-s, --skip-chars=N`)
	.param('-u, --unique', `-u, --unique`)
	.param('-w, --check-chars=N', `-w, --check-chars=N`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('uniq', args))
    
    