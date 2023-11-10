#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('id')
  .description("")
  .param('-a     ignore, for compatibility with other versions', `-a     ignore, for compatibility with other versions`)
	.param('-g, --group', `-g, --group`)
	.param('-G, --groups', `-G, --groups`)
	.param('-n, --name', `-n, --name`)
	.param('-r, --real', `-r, --real`)
	.param('-u, --user', `-u, --user`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('id', args))
    
    