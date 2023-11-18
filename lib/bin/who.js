#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('who')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('-b, --boot', `-b, --boot`)
	.option('-d, --dead', `-d, --dead`)
	.option('-H, --heading', `-H, --heading`)
	.option('-i, --idle', `-i, --idle`)
	.option('-l, --login', `-l, --login`)
	.option('--lookup', `attempt to canonicalize hostnames via DNS`)
	.option('-m     only hostname and user associated with stdin', `-m     only hostname and user associated with stdin`)
	.option('-p, --process', `-p, --process`)
	.option('-q, --count', `-q, --count`)
	.option('-r, --runlevel', `-r, --runlevel`)
	.option('-s, --short', `-s, --short`)
	.option('-t, --time', `-t, --time`)
	.option('-T, -w, --mesg', `-T, -w, --mesg`)
	.option('-u, --users', `-u, --users`)
	.option('--message', `same as -T`)
	.option('--writable', `same as -T`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
  .action(() => execute('who', args))
    
    