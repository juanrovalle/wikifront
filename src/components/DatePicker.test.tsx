import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker Component', () => {
  it('should render the selected date', () => {
    const selectedDate = '2024-09-12';
    render(<DatePicker selectedDate={selectedDate} onDateChange={() => {}} />);

    const input = screen.getByDisplayValue('2024-09-12');
    expect(input).toBeInTheDocument();
  });

  it('should call onDateChange when a new date is selected', () => {
    const onDateChange = jest.fn();
    render(<DatePicker selectedDate="2024-09-12" onDateChange={onDateChange} />);

    const input = screen.getByDisplayValue('2024-09-12');
    fireEvent.change(input, { target: { value: '2024-09-13' } });

    expect(onDateChange).toHaveBeenCalledWith('2024-09-13');
  });
});
