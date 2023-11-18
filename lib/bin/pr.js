#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('pr')
  .description("")
  .option('-COLUMN, --columns=COLUMN', `-COLUMN, --columns=COLUMN`)
	.option('-a, --across', `-a, --across`)
	.option('-c, --show-control-chars', `-c, --show-control-chars`)
	.option('-d, --double-space', `-d, --double-space`)
	.option('-D, --date-format=FORMAT', `-D, --date-format=FORMAT`)
	.option('-e[CHAR[WIDTH]], --expand-tabs[=CHAR[WIDTH]]', `-e[CHAR[WIDTH]], --expand-tabs[=CHAR[WIDTH]]`)
	.option('-F, -f, --form-feed', `-F, -f, --form-feed`)
	.option('-h HEADER, --header=HEADER', `-h HEADER, --header=HEADER`)
	.option('-i[CHAR[WIDTH]], --output-tabs[=CHAR[WIDTH]]', `-i[CHAR[WIDTH]], --output-tabs[=CHAR[WIDTH]]`)
	.option('-J, --join-lines', `-J, --join-lines`)
	.option('-l PAGE_LENGTH, --length=PAGE_LENGTH', `-l PAGE_LENGTH, --length=PAGE_LENGTH`)
	.option('-m, --merge', `-m, --merge`)
	.option('-n[SEP[DIGITS]], --number-lines[=SEP[DIGITS]]', `-n[SEP[DIGITS]], --number-lines[=SEP[DIGITS]]`)
	.option('-N NUMBER, --first-line-number=NUMBER', `-N NUMBER, --first-line-number=NUMBER`)
	.option('-o MARGIN, --indent=MARGIN', `-o MARGIN, --indent=MARGIN`)
	.option('-r, --no-file-warnings', `-r, --no-file-warnings`)
	.option('-s[CHAR],--separator[=CHAR]', `-s[CHAR],--separator[=CHAR]`)
	.option('-SSTRING, --sep-string[=STRING]', `-SSTRING, --sep-string[=STRING]`)
	.option('-t, --omit-header omit page headers and trailers', `-t, --omit-header omit page headers and trailers`)
	.option('-T, --omit-pagination', `-T, --omit-pagination`)
	.option('-v, --show-nonprinting', `-v, --show-nonprinting`)
	.option('-w PAGE_WIDTH, --width=PAGE_WIDTH', `-w PAGE_WIDTH, --width=PAGE_WIDTH`)
	.option('-W PAGE_WIDTH, --page-width=PAGE_WIDTH', `-W PAGE_WIDTH, --page-width=PAGE_WIDTH`)
	.option('--help', ``)
	.option('--version', `output version information and exit`)
	.option('-T implied by -l nn when nn <= 10 or <= 3 with -F.  With', `-T implied by -l nn when nn <= 10 or <= 3 with -F.  With`)
  .action(() => execute('pr', args))
    
    