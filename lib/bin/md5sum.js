#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('md5sum')
  .description("")
  .param('-b, --binary', `-b, --binary`)
	.param('-c, --check', `-c, --check`)
	.param('-t, --text', `-t, --text`)
	.param('--status', `don't output anything, status code shows success`)
	.param('-w, --warn', `-w, --warn`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('md5sum', args))
    
    