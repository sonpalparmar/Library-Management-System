import React from 'react';
import data from '../jsonData/index';

const DefaultData = () => {
  const defaultResults = data.slice(0, 10); // Get first 10 items from data array

  return (
    <ul>
      {defaultResults.map((book) => (
        <li key={book.SR_NO}>
          <div>Title: {book.TITLE}</div>
          <div>Author: {book.AUTHORS}</div>
          <div>Subject: {book.SUBJECT}</div>
          <div>Year: {book.YEAR}</div>
        </li>
      ))}
    </ul>
  );
};

export default DefaultData;
