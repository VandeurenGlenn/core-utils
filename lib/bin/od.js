#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('od')
  .description("")
  .option('-A, --address-radix=RADIX', `-A, --address-radix=RADIX`)
	.option('-j, --skip-bytes=BYTES', `-j, --skip-bytes=BYTES`)
	.option('-N, --read-bytes=BYTES', `-N, --read-bytes=BYTES`)
	.option('-S, --strings[=BYTES]', `-S, --strings[=BYTES]`)
	.option('-t, --format=TYPE', `-t, --format=TYPE`)
	.option('-v, --output-duplicates', `-v, --output-duplicates`)
	.option('-w, --width[=BYTES]', `-w, --width[=BYTES]`)
	.option('--traditional', `accept arguments in traditional form`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-a     same as -t a,  select named characters', `-a     same as -t a,  select named characters`)
	.option('-b     same as -t o1, select octal bytes', `-b     same as -t o1, select octal bytes`)
	.option('-c     same as -t c,  select ASCII characters  or  back-', `-c     same as -t c,  select ASCII characters  or  back-`)
	.option('-d     same  as  -t  u2,  select unsigned decimal 2-byte', `-d     same  as  -t  u2,  select unsigned decimal 2-byte`)
	.option('-f     same as -t fF, select floats', `-f     same as -t fF, select floats`)
	.option('-i     same as -t dI, select decimal ints', `-i     same as -t dI, select decimal ints`)
	.option('-l     same as -t dL, select decimal longs', `-l     same as -t dL, select decimal longs`)
	.option('-o     same as -t o2, select octal 2-byte units', `-o     same as -t o2, select octal 2-byte units`)
	.option('-s     same as -t d2, select decimal 2-byte units', `-s     same as -t d2, select decimal 2-byte units`)
	.option('-x     same as -t x2, select hexadecimal 2-byte units', `-x     same as -t x2, select hexadecimal 2-byte units`)
  .action(() => execute('od', args))
    
    