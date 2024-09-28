import React, { useState } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import './FindBook.css';
import ViewBook from './ViewBook';

const FindBook = () => {
  const [book, setBook] = useState({ name: "", page: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the next page with the form data
    navigate('/view-Book', { state: { bookName: book.name, pageNumber: book.page } });
  };

  return (
    <div className='main'>
      <nav>
        <h1>MindShelf</h1>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="FindBook">
        <form id="findBookForm" onSubmit={handleSubmit}>
          <label>Enter Book name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={book.name}
            onChange={handleChange}
            required
          />

          <label>Until Page</label>
          <input
            type="text"
            id="page"
            name="page"
            value={book.page}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FindBook;
