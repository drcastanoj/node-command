import boxen from 'boxen';
import chalk from 'chalk';

import { Movie } from './type';

const printTitle = (text: string, color = 'white') => chalk[color].bold(text);

const dividePlot = (Plot) => {
  const plotSlip = Plot.split(' ');
  const plotLength = plotSlip.length / 3;
  const plotDivide = [];
  for (let index = 0; index < 3; index++) {
    plotDivide.push(
      plotSlip.slice(plotLength * index, plotLength * (index + 1)).join(' ')
    );
  }
  return plotDivide.join('\n');
};

export const printMovie = ({
  Title,
  Actors,
  Country,
  Language,
  Plot,
  Ratings,
  Year,
  imdbRating,
}: Movie) => {
  const rottenTomatoes = Ratings.find((s) => s.Source === 'Rotten Tomatoes');
  const movieFull = `
  ${printTitle('Movie', 'blue')} 
  ${printTitle(Title, 'blue')}

  ${printTitle('Year')}: ${Year}
  ${printTitle('IMDB rating: ')}: ${imdbRating}
  ${printTitle('Country of production: ')}: ${Country}
  ${printTitle('Language: ')}: ${Language}
  ${printTitle('Plot: ')}: ${dividePlot(Plot)} 
  ${printTitle('Actors: ')}: ${Actors}
  ${
    rottenTomatoes ? printTitle('Rotten Tomatoes: ') + rottenTomatoes.Value : ''
  }
  `;

  console.log(
    boxen(movieFull, {
      padding: 1,
      margin: 1,
      borderStyle: boxen.BorderStyle.Bold,
      borderColor: 'magentaBright',
      backgroundColor: '#555555',
      dimBorder: true,
    })
  );
};

export const printError = (message) => {
  const errorMessage = chalk.red.bold(message);
  console.log(errorMessage);
};
