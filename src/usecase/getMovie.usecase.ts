import { getMovie } from '../gateway';
import { ResponseBool } from '../type';

export const GetMovieUseCase = async ({ title }) => {
  if (!title) {
    throw new Error('Please add movie title');
  }
  const { data } = await getMovie(title);

  if (data.Response === ResponseBool.False) {
    throw new Error('Movie not found');
  }
  return data;
};
