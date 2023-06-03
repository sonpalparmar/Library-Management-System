import React, { useState } from 'react';
import data from '../jsonData/index'
import DefaultData from '../defaultResult/index.jsx';

const PublishYear = () => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (startYear && endYear) {
      searchByPublishYear(startYear, endYear);
    } else {
      setDefaultResults();
    }
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const searchByPublishYear = (start, end) => {
    const results = data.filter((item) => item.YEAR >= start && item.YEAR <= end);
    setSearchResults(results);
  };

  const setDefaultResults = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="number"
          placeholder="Start Year"
          value={startYear}
          onChange={handleStartYearChange}
        />
        <input
          type="number"
          placeholder="End Year"
          value={endYear}
          onChange={handleEndYearChange}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((book) => (
            <li key={book.SR_NO}>
              <div>Title: {book.TITLE}</div>
              <div>Author: {book.AUTHORS}</div>
              <div>Subject: {book.SUBJECT}</div>
              <div>Year: {book.YEAR}</div>
            </li>
          ))}
        </ul>
      ) : (
        <DefaultData />
      )}
    </div>
  );
};

export default PublishYear;
