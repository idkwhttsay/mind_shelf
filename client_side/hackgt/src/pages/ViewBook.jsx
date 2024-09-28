import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewBook = () => {
  const location = useLocation();
  const { bookName, pageNumber } = location.state || {};
  const [bookObject, setBookObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/book/", {
          bookName: bookName,
          pageNumber: pageNumber,
          userId: "user123",
        });

        setBookObject(response.data);
      } catch (error) {
        console.error("Error making request:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Summary Of The Book {bookName} Until Page {pageNumber}</h1>
      <img src="https://m.media-amazon.com/images/I/511G04l12qL._SY445_SX342_.jpg"/>
      <p>Author: {bookObject.author}</p>
      <p>Book Name: {bookName}</p>
      <p>Summary To Page Number: {pageNumber}</p>
      {bookObject ? (
        <p>Description: {bookObject.description}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewBook;
