import { printError, printMovie } from '../print';
import { GetMovieUseCase } from '../usecase';

import { getMovieController } from './getMovie.controller';

jest.mock('../usecase', () => ({
  GetMovieUseCase: jest.fn(),
}));

jest.mock('../print', () => ({
  printMovie: jest.fn(),
  printError: jest.fn(),
}));

const mockGetMovieUseCase = jest.mocked(GetMovieUseCase);
const mockPrintMovie = jest.mocked(printMovie);
const mockPrintError = jest.mocked(printError);

describe('getMovieController', () => {
  it('should call getMovieUseCase and print movie ', async () => {
    const movieResponse: any = { title: 'movieTitle' };
    mockGetMovieUseCase.mockResolvedValue(movieResponse);
    await getMovieController('titleMock');
    expect(mockGetMovieUseCase).toBeCalledWith({ title: 'titleMock' });
    expect(mockPrintMovie).toBeCalledWith(movieResponse);
    expect(mockPrintError).not.toBeCalled();
  });

  it('should getMovieUseCase and throw error ', async () => {
    const movieResponse: any = { title: 'movieTitle' };
    mockGetMovieUseCase.mockRejectedValue(movieResponse);
    try {
      await getMovieController('titleMock');
    } catch (error) {
      expect(mockGetMovieUseCase).toBeCalledWith({ error: 'mockError' });
      expect(mockPrintMovie).not.toBeCalled();
      expect(mockPrintError).toBeCalled();
    }
  });
});
