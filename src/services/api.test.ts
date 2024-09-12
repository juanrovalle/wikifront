// src/services/api.test.ts

import { fetchFeaturedContent } from './api';
import axios from 'axios';

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchFeaturedContent', () => {
  it('should fetch featured content successfully', async () => {
    const mockData = { tfa: { title: 'Test Article', extract: 'Test extract' } };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const data = await fetchFeaturedContent('2024/09/10', 'en');

    expect(data).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://api.wikimedia.org/feed/v1/wikipedia/en/featured/2024/09/10'
    );
  });

  it('should handle API errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    await expect(fetchFeaturedContent('2024/09/10', 'en')).rejects.toThrow('Failed to fetch featured content');
  });
});