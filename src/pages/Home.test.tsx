import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { fetchFeaturedContent } from '../services/api';

// Mock the API service
jest.mock('../services/api');

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock console.error to suppress error logs during tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error after each test
    jest.restoreAllMocks();
  });

  it('should render the Home component correctly', async () => {
    const mockData = {
      mostread: {
        articles: [
          {
            title: 'Article 1',
            extract: 'This is an extract for article 1',
            thumbnail: { source: 'https://example.com/thumbnail1.jpg' },
            content_urls: { desktop: { page: 'https://example.com/article1' } },
          },
        ],
      },
    };
    (fetchFeaturedContent as jest.Mock).mockResolvedValue(mockData);

    render(<Home />);

    // Verify loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the content to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Article 1')).toBeInTheDocument();
    });
  });

  it('should handle API errors gracefully', async () => {
    // Mock the API call to simulate an error
    (fetchFeaturedContent as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<Home />);

    // Verify loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the error to be handled
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(console.error).toHaveBeenCalledWith('Error fetching content:', expect.any(Error));
    });
  });
});
