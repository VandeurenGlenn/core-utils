#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('uname')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('-s, --kernel-name', `-s, --kernel-name`)
	.param('-n, --nodename', `-n, --nodename`)
	.param('-r, --kernel-release', `-r, --kernel-release`)
	.param('-v, --kernel-version', `-v, --kernel-version`)
	.param('-m, --machine', `-m, --machine`)
	.param('-p, --processor', `-p, --processor`)
	.param('-i, --hardware-platform', `-i, --hardware-platform`)
	.param('-o, --operating-system', `-o, --operating-system`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('uname', args))
    
    