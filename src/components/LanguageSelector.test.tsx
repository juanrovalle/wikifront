import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

describe('LanguageSelector Component', () => {
  it('should render the selected language', () => {
    render(<LanguageSelector selectedLanguage="en" onLanguageChange={() => {}} />);

    const select = screen.getByDisplayValue('English');
    expect(select).toBeInTheDocument();
  });

  it('should call onLanguageChange when a new language is selected', () => {
    const onLanguageChange = jest.fn();
    render(<LanguageSelector selectedLanguage="en" onLanguageChange={onLanguageChange} />);

    const select = screen.getByDisplayValue('English');
    fireEvent.change(select, { target: { value: 'es' } });

    expect(onLanguageChange).toHaveBeenCalledWith('es');
  });
});
