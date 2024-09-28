import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewBook = () => {
  const location = useLocation();
  const { bookName, pageNumber } = location.state || {};

  return (
    <div>
      <h1>Book Details</h1>
      <p>Book Name: {bookName}</p>
      <p>Page Number: {pageNumber}</p>
    </div>
  );
};

export default ViewBook;