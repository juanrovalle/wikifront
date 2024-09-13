import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('should render the current page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText('2 of 5')).toBeInTheDocument();
  });

  it('should disable the "Previous" button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('should disable the "Next" button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('should call onPageChange when the "Previous" or "Next" buttons are clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(2);

    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(4);
  });
});
