#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('md5sum')
  .description("")
  .option('-b, --binary', `-b, --binary`)
	.option('-c, --check', `-c, --check`)
	.option('-t, --text', `-t, --text`)
	.option('--status', `don't output anything, status code shows success`)
	.option('-w, --warn', `-w, --warn`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('md5sum', args))
    
    