#! /usr/bin/env node 

import { program } from "commander";
import { execute } from "./../utils.js";

const args = process.argv.slice(2, process.argv.length)
program
  .command('pr')
  .description("")
  .param('-COLUMN, --columns=COLUMN', `-COLUMN, --columns=COLUMN`)
	.param('-a, --across', `-a, --across`)
	.param('-c, --show-control-chars', `-c, --show-control-chars`)
	.param('-d, --double-space', `-d, --double-space`)
	.param('-D, --date-format=FORMAT', `-D, --date-format=FORMAT`)
	.param('-e[CHAR[WIDTH]], --expand-tabs[=CHAR[WIDTH]]', `-e[CHAR[WIDTH]], --expand-tabs[=CHAR[WIDTH]]`)
	.param('-F, -f, --form-feed', `-F, -f, --form-feed`)
	.param('-h HEADER, --header=HEADER', `-h HEADER, --header=HEADER`)
	.param('-i[CHAR[WIDTH]], --output-tabs[=CHAR[WIDTH]]', `-i[CHAR[WIDTH]], --output-tabs[=CHAR[WIDTH]]`)
	.param('-J, --join-lines', `-J, --join-lines`)
	.param('-l PAGE_LENGTH, --length=PAGE_LENGTH', `-l PAGE_LENGTH, --length=PAGE_LENGTH`)
	.param('-m, --merge', `-m, --merge`)
	.param('-n[SEP[DIGITS]], --number-lines[=SEP[DIGITS]]', `-n[SEP[DIGITS]], --number-lines[=SEP[DIGITS]]`)
	.param('-N NUMBER, --first-line-number=NUMBER', `-N NUMBER, --first-line-number=NUMBER`)
	.param('-o MARGIN, --indent=MARGIN', `-o MARGIN, --indent=MARGIN`)
	.param('-r, --no-file-warnings', `-r, --no-file-warnings`)
	.param('-s[CHAR],--separator[=CHAR]', `-s[CHAR],--separator[=CHAR]`)
	.param('-SSTRING, --sep-string[=STRING]', `-SSTRING, --sep-string[=STRING]`)
	.param('-t, --omit-header omit page headers and trailers', `-t, --omit-header omit page headers and trailers`)
	.param('-T, --omit-pagination', `-T, --omit-pagination`)
	.param('-v, --show-nonprinting', `-v, --show-nonprinting`)
	.param('-w PAGE_WIDTH, --width=PAGE_WIDTH', `-w PAGE_WIDTH, --width=PAGE_WIDTH`)
	.param('-W PAGE_WIDTH, --page-width=PAGE_WIDTH', `-W PAGE_WIDTH, --page-width=PAGE_WIDTH`)
	.param('--help', ``)
	.param('--version', `output version information and exit`)
	.param('-T implied by -l nn when nn <= 10 or <= 3 with -F.  With', `-T implied by -l nn when nn <= 10 or <= 3 with -F.  With`)
  .action(() => execute('pr', args))
    
    