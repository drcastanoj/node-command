import axios from 'axios';

import { Movie } from '../type';

export const getMovie = async (title) => {
  return await axios.get<Movie>(
    'http://www.omdbapi.com/?apikey=7a03a51&t=' + title
  );
};
