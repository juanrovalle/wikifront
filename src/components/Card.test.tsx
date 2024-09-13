import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  it('renders the title, excerpt, and thumbnail', () => {
    // Define the props to pass into the Card component
    const props = {
      title: 'Sample Article',
      excerpt: 'This is a sample excerpt from the article.',
      thumbnail: 'https://example.com/thumbnail.jpg',
      url: 'https://example.com/article'
    };

    render(<Card {...props} />);

    // Assert that the title, excerpt, and thumbnail are rendered correctly
    expect(screen.getByText('Sample Article')).toBeInTheDocument();
    expect(screen.getByText('This is a sample excerpt from the article.')).toBeInTheDocument();
    expect(screen.getByAltText('Sample Article')).toHaveAttribute('src', 'https://example.com/thumbnail.jpg');
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com/article');
  });

  it('renders without a thumbnail', () => {
    const props = {
      title: 'Sample Article Without Thumbnail',
      excerpt: 'This article does not have a thumbnail.',
      url: 'https://example.com/article-no-thumbnail'
    };

    render(<Card {...props} />);

    // Assert that the title and excerpt are rendered, but there is no image
    expect(screen.getByText('Sample Article Without Thumbnail')).toBeInTheDocument();
    expect(screen.getByText('This article does not have a thumbnail.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).toBeNull(); // There should be no image
  });

  it('has the correct link target and rel attributes', () => {
    const props = {
      title: 'Test Article',
      excerpt: 'Testing the target and rel attributes.',
      thumbnail: 'https://example.com/thumbnail.jpg',
      url: 'https://example.com/test-article'
    };

    render(<Card {...props} />);

    // Assert that the link opens in a new tab and has `noopener noreferrer` for security
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/test-article');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
