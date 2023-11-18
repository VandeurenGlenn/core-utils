#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('date')
  .description("")
  .option('-d, --date=STRING', `-d, --date=STRING`)
	.option('-f, --file=DATEFILE', `-f, --file=DATEFILE`)
	.option('--iso-8601[=TIMESPEC] output date/time in ISO 8601  for-', `mat.`)
	.option('-r, --reference=FILE', `-r, --reference=FILE`)
	.option('-R, --rfc-2822', `-R, --rfc-2822`)
	.option('-s, --set=STRING', `-s, --set=STRING`)
	.option('-u, --utc, --universal', `-u, --utc, --universal`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('date', args))
    
    