import React, { useState } from 'react';
import './Auther.css';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index.jsx';

const Auther = () => {
  const [author, setAuthor] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(author);
    searchAuthors(author);
  };

  const handleChange = (e) => {
    setAuthor(e.target.value);
  };

  const searchAuthors = (query) => {
    const results = data.filter((item) =>
      item.AUTHORS.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className='author_search'>
      <form onSubmit={handleSubmit}>
        <input
          id='search'
          placeholder='Author'
          value={author}
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

export default Auther;
