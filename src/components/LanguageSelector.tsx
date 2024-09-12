// src/components/LanguageSelector.tsx

import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
    </select>
  );
};

export default LanguageSelector;
