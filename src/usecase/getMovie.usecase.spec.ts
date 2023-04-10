import { getMovie } from '../gateway';
import { ResponseBool } from '../type/movie.type';

import { GetMovieUseCase } from './getMovie.usecase';

jest.mock('../gateway', () => ({
  getMovie: jest.fn(),
}));

const mockGetMovie = jest.mocked(getMovie);
describe('GetMovieUseCase ', () => {
  it('should return correct data response true', async () => {
    const dataResponse = { Response: ResponseBool.True };
    mockGetMovie.mockResolvedValue({ data: dataResponse } as any);
    const response = await GetMovieUseCase({ title: 'mockTitle' });
    expect(response).toBe(dataResponse);
  });

  it('should return throw error ', async () => {
    try {
      const dataResponse = { Response: ResponseBool.False };
      mockGetMovie.mockResolvedValue({ data: dataResponse } as any);
      await GetMovieUseCase({ title: 'mockTitle' });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return throw error for null title ', async () => {
    try {
      const dataResponse = { Response: ResponseBool.False };
      mockGetMovie.mockResolvedValue({ data: dataResponse } as any);
      await GetMovieUseCase({ title: '' });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
