#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('date')
  .description("")
  .param('-d, --date=STRING', `-d, --date=STRING`)
	.param('-f, --file=DATEFILE', `-f, --file=DATEFILE`)
	.param('--iso-8601[=TIMESPEC] output date/time in ISO 8601  for-', `mat.`)
	.param('-r, --reference=FILE', `-r, --reference=FILE`)
	.param('-R, --rfc-2822', `-R, --rfc-2822`)
	.param('-s, --set=STRING', `-s, --set=STRING`)
	.param('-u, --utc, --universal', `-u, --utc, --universal`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('date', args))
    
    