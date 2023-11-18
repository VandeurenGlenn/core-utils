#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('fmt')
  .description("")
  .option('-c, --crown-margin', `-c, --crown-margin`)
	.option('-p, --prefix=STRING', `-p, --prefix=STRING`)
	.option('-s, --split-only', `-s, --split-only`)
	.option('-t, --tagged-paragraph', `-t, --tagged-paragraph`)
	.option('-u, --uniform-spacing', `-u, --uniform-spacing`)
	.option('-w, --width=WIDTH', `-w, --width=WIDTH`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('fmt', args))
    
    