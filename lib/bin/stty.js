#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('stty')
  .description("")
  .param('-a, --all', `-a, --all`)
	.param('-g, --save', `-g, --save`)
	.param('-F, --file=DEVICE', `-F, --file=DEVICE`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-cbreak', `-cbreak`)
	.param('-cooked', `-cooked`)
	.param('-evenp same as -parenb cs8', `-evenp same as -parenb cs8`)
	.param('-litout', `-litout`)
	.param('-nl    same as icrnl -inlcr -igncr onlcr -ocrnl -onlret', `-nl    same as icrnl -inlcr -igncr onlcr -ocrnl -onlret`)
	.param('-oddp  same as -parenb cs8', `-oddp  same as -parenb cs8`)
	.param('-pass8 same as parenb istrip cs7', `-pass8 same as parenb istrip cs7`)
	.param('-istrip  -inlcr  -igncr  -icrnl   -ixon    -ixoff', `-istrip  -inlcr  -igncr  -icrnl   -ixon    -ixoff`)
	.param('-iuclc   -ixany  -imaxbel  -opost  -isig  -icanon', `-iuclc   -ixany  -imaxbel  -opost  -isig  -icanon`)
	.param('-xcase min 1 time 0', `-xcase min 1 time 0`)
	.param('-raw   same as cooked', `-raw   same as cooked`)
	.param('-iutf8  -ixoff -iuclc -ixany imaxbel opost -olcuc', `-iutf8  -ixoff -iuclc -ixany imaxbel opost -olcuc`)
	.param('-ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0', `-ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0`)
  .action(() => execute('stty', args))
    
    