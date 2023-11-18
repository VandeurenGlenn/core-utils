#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tail')
  .description("")
  .option('--retry', `keep trying to open a file even if it is inacces-`)
	.option('-c, --bytes=N', `-c, --bytes=N`)
	.option('-f, --follow[={name|descriptor}]', `-f, --follow[={name|descriptor}]`)
	.option('--follow', ``)
	.option('-F     same as --follow=name --retry', `-F     same as --follow=name --retry`)
	.option('-n, --lines=N', `-n, --lines=N`)
	.option('--max-unchanged-stats=N', `with  --follow=name,  reopen a FILE which has not`)
	.option('--pid=PID', `with -f, terminate after process ID, PID dies`)
	.option('-q, --quiet, --silent', `-q, --quiet, --silent`)
	.option('-s, --sleep-interval=S', `-s, --sleep-interval=S`)
	.option('-v, --verbose', `-v, --verbose`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('tail', args))
    
    