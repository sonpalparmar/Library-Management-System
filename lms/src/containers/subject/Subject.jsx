import React, { useState } from 'react';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index.jsx';


const Subject = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchBySubject(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchBySubject = (query) => {
    const results = data.filter((item) =>
      item.SUBJECT.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by subject"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
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
      </ul>
    </div>
  );
};

export default Subject;
