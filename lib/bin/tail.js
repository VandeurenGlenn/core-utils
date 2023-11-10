#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('tail')
  .description("")
  .param('--retry', `keep trying to open a file even if it is inacces-`)
	.param('-c, --bytes=N', `-c, --bytes=N`)
	.param('-f, --follow[={name|descriptor}]', `-f, --follow[={name|descriptor}]`)
	.param('--follow', ``)
	.param('-F     same as --follow=name --retry', `-F     same as --follow=name --retry`)
	.param('-n, --lines=N', `-n, --lines=N`)
	.param('--max-unchanged-stats=N', `with  --follow=name,  reopen a FILE which has not`)
	.param('--pid=PID', `with -f, terminate after process ID, PID dies`)
	.param('-q, --quiet, --silent', `-q, --quiet, --silent`)
	.param('-s, --sleep-interval=S', `-s, --sleep-interval=S`)
	.param('-v, --verbose', `-v, --verbose`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('tail', args))
    
    