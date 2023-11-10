#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('who')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('-b, --boot', `-b, --boot`)
	.param('-d, --dead', `-d, --dead`)
	.param('-H, --heading', `-H, --heading`)
	.param('-i, --idle', `-i, --idle`)
	.param('-l, --login', `-l, --login`)
	.param('--lookup', `attempt to canonicalize hostnames via DNS`)
	.param('-m     only hostname and user associated with stdin', `-m     only hostname and user associated with stdin`)
	.param('-p, --process', `-p, --process`)
	.param('-q, --count', `-q, --count`)
	.param('-r, --runlevel', `-r, --runlevel`)
	.param('-s, --short', `-s, --short`)
	.param('-t, --time', `-t, --time`)
	.param('-T, -w, --mesg', `-T, -w, --mesg`)
	.param('-u, --users', `-u, --users`)
	.param('--message', `same as -T`)
	.param('--writable', `same as -T`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
  .action(() => execute('who', args))
    
    