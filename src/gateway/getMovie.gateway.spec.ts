import axios from 'axios';

import { getMovie } from './getMovie.gateway';

jest.mock('axios');

describe('getMovie Gateway', () => {
  it('should call correct url', () => {
    (axios as any).get.mockResolvedValueOnce({});
    getMovie('titleMock');
    expect((axios as any).get).toBeCalledWith(
      'http://www.omdbapi.com/?apikey=7a03a51&t=titleMock'
    );
  });
});
