#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('uname')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('-s, --kernel-name', `-s, --kernel-name`)
	.option('-n, --nodename', `-n, --nodename`)
	.option('-r, --kernel-release', `-r, --kernel-release`)
	.option('-v, --kernel-version', `-v, --kernel-version`)
	.option('-m, --machine', `-m, --machine`)
	.option('-p, --processor', `-p, --processor`)
	.option('-i, --hardware-platform', `-i, --hardware-platform`)
	.option('-o, --operating-system', `-o, --operating-system`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('uname', args))
    
    