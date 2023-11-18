#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('stty')
  .description("")
  .option('-a, --all', `-a, --all`)
	.option('-g, --save', `-g, --save`)
	.option('-F, --file=DEVICE', `-F, --file=DEVICE`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-cbreak', `-cbreak`)
	.option('-cooked', `-cooked`)
	.option('-evenp same as -parenb cs8', `-evenp same as -parenb cs8`)
	.option('-litout', `-litout`)
	.option('-nl    same as icrnl -inlcr -igncr onlcr -ocrnl -onlret', `-nl    same as icrnl -inlcr -igncr onlcr -ocrnl -onlret`)
	.option('-oddp  same as -parenb cs8', `-oddp  same as -parenb cs8`)
	.option('-pass8 same as parenb istrip cs7', `-pass8 same as parenb istrip cs7`)
	.option('-istrip  -inlcr  -igncr  -icrnl   -ixon    -ixoff', `-istrip  -inlcr  -igncr  -icrnl   -ixon    -ixoff`)
	.option('-iuclc   -ixany  -imaxbel  -opost  -isig  -icanon', `-iuclc   -ixany  -imaxbel  -opost  -isig  -icanon`)
	.option('-xcase min 1 time 0', `-xcase min 1 time 0`)
	.option('-raw   same as cooked', `-raw   same as cooked`)
	.option('-iutf8  -ixoff -iuclc -ixany imaxbel opost -olcuc', `-iutf8  -ixoff -iuclc -ixany imaxbel opost -olcuc`)
	.option('-ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0', `-ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0`)
  .action(() => execute('stty', args))
    
    