import { printError, printMovie } from '../print';
import { GetMovieUseCase } from '../usecase';

export const getMovieController = async (title: string) => {
  try {
    const movie = await GetMovieUseCase({ title });
    printMovie(movie);
  } catch (error) {
    printError(error?.message);
  }
};
