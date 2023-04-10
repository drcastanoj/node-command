#! /usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { getMovieController } from './controller';

yargs(hideBin(process.argv))
  .command(
    'search [movie]',
    'get movie data',
    (yargs: any) => {
      return yargs.positional('movie', {
        describe: 'retrieve movie',
      });
    },
    (argv: any) => {
      const movieTitle = argv.movie;
      getMovieController(movieTitle || '');
    }
  )
  .strictCommands()
  .demandCommand(1)
  .parse();
