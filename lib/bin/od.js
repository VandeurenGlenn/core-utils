#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('od')
  .description("")
  .param('-A, --address-radix=RADIX', `-A, --address-radix=RADIX`)
	.param('-j, --skip-bytes=BYTES', `-j, --skip-bytes=BYTES`)
	.param('-N, --read-bytes=BYTES', `-N, --read-bytes=BYTES`)
	.param('-S, --strings[=BYTES]', `-S, --strings[=BYTES]`)
	.param('-t, --format=TYPE', `-t, --format=TYPE`)
	.param('-v, --output-duplicates', `-v, --output-duplicates`)
	.param('-w, --width[=BYTES]', `-w, --width[=BYTES]`)
	.param('--traditional', `accept arguments in traditional form`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-a     same as -t a,  select named characters', `-a     same as -t a,  select named characters`)
	.param('-b     same as -t o1, select octal bytes', `-b     same as -t o1, select octal bytes`)
	.param('-c     same as -t c,  select ASCII characters  or  back-', `-c     same as -t c,  select ASCII characters  or  back-`)
	.param('-d     same  as  -t  u2,  select unsigned decimal 2-byte', `-d     same  as  -t  u2,  select unsigned decimal 2-byte`)
	.param('-f     same as -t fF, select floats', `-f     same as -t fF, select floats`)
	.param('-i     same as -t dI, select decimal ints', `-i     same as -t dI, select decimal ints`)
	.param('-l     same as -t dL, select decimal longs', `-l     same as -t dL, select decimal longs`)
	.param('-o     same as -t o2, select octal 2-byte units', `-o     same as -t o2, select octal 2-byte units`)
	.param('-s     same as -t d2, select decimal 2-byte units', `-s     same as -t d2, select decimal 2-byte units`)
	.param('-x     same as -t x2, select hexadecimal 2-byte units', `-x     same as -t x2, select hexadecimal 2-byte units`)
  .action(() => execute('od', args))
    
    