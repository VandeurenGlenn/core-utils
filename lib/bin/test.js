#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('test')
  .description("")
  .param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-n STRING', `-n STRING`)
	.param('-z STRING', `-z STRING`)
	.param('-b FILE', `-b FILE`)
	.param('-c FILE', `-c FILE`)
	.param('-d FILE', `-d FILE`)
	.param('-e FILE', `-e FILE`)
	.param('-f FILE', `-f FILE`)
	.param('-g FILE', `-g FILE`)
	.param('-G FILE', `-G FILE`)
	.param('-h FILE', `-h FILE`)
	.param('-k FILE', `-k FILE`)
	.param('-L FILE', `-L FILE`)
	.param('-O FILE', `-O FILE`)
	.param('-p FILE', `-p FILE`)
	.param('-r FILE', `-r FILE`)
	.param('-s FILE', `-s FILE`)
	.param('-S FILE', `-S FILE`)
	.param('-t FD  file descriptor FD is opened on a terminal', `-t FD  file descriptor FD is opened on a terminal`)
	.param('-u FILE', `-u FILE`)
	.param('-w FILE', `-w FILE`)
	.param('-x FILE', `-x FILE`)
  .action(() => execute('test', args))
    
    