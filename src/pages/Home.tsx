// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Root } from '../models/index';
import Card from '../components/Card';
import {fetchFeaturedContent} from '../services/api'
import DatePicker from '../components/DatePicker';
import LanguageSelector from '../components/LanguageSelector';
import Pagination from '../components/Pagination';

const Home: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [language, setLanguage] = useState<string>('en');
  const [content, setContent] = useState<Root | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
 const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    setLoading(true);
    fetchFeaturedContent(date, language)
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching content:', error);
        setLoading(false);
      });
  }, [date, language]);

  const totalPages = content?.mostread?.articles.length
    ? Math.ceil(content.mostread.articles.length / itemsPerPage)
    : 1;

  const displayedArticles = content?.mostread?.articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1>Wikipedia Featured Content</h1>
      <DatePicker selectedDate={date} onDateChange={setDate} />
      <LanguageSelector selectedLanguage={language} onLanguageChange={setLanguage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {displayedArticles?.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              excerpt={article.extract}
              thumbnail={article.thumbnail?.source}
              url={article.content_urls.desktop.page}
            />
          ))}
        </div>
      )}


    </div>
  );
};

export default Home;
