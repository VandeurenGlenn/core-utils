#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('test')
  .description("")
  .option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-n STRING', `-n STRING`)
	.option('-z STRING', `-z STRING`)
	.option('-b FILE', `-b FILE`)
	.option('-c FILE', `-c FILE`)
	.option('-d FILE', `-d FILE`)
	.option('-e FILE', `-e FILE`)
	.option('-f FILE', `-f FILE`)
	.option('-g FILE', `-g FILE`)
	.option('-G FILE', `-G FILE`)
	.option('-h FILE', `-h FILE`)
	.option('-k FILE', `-k FILE`)
	.option('-L FILE', `-L FILE`)
	.option('-O FILE', `-O FILE`)
	.option('-p FILE', `-p FILE`)
	.option('-r FILE', `-r FILE`)
	.option('-s FILE', `-s FILE`)
	.option('-S FILE', `-S FILE`)
	.option('-t FD  file descriptor FD is opened on a terminal', `-t FD  file descriptor FD is opened on a terminal`)
	.option('-u FILE', `-u FILE`)
	.option('-w FILE', `-w FILE`)
	.option('-x FILE', `-x FILE`)
  .action(() => execute('test', args))
    
    