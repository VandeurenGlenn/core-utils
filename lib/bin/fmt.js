#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('fmt')
  .description("")
  .param('-c, --crown-margin', `-c, --crown-margin`)
	.param('-p, --prefix=STRING', `-p, --prefix=STRING`)
	.param('-s, --split-only', `-s, --split-only`)
	.param('-t, --tagged-paragraph', `-t, --tagged-paragraph`)
	.param('-u, --uniform-spacing', `-u, --uniform-spacing`)
	.param('-w, --width=WIDTH', `-w, --width=WIDTH`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('fmt', args))
    
    