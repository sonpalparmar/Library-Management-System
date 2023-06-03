import React, { useState } from 'react';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index';

const Title = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      searchByTitle(searchTerm);
    } else {
      setDefaultResults();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchByTitle = (query) => {
    const results = data.filter((item) =>
      item.TITLE.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const setDefaultResults = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleChange}
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

export default Title;
