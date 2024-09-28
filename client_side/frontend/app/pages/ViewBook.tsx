"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ViewBook() {
  const searchParams = useSearchParams();
  const bookName = searchParams.get('bookName');
  const pageNumber = searchParams.get('pageNumber');

  const [bookDetails, setBookDetails] = useState({ name: '', page: '' });

  useEffect(() => {
    if (bookName && pageNumber) {
      setBookDetails({ name: bookName, page: pageNumber });
    }
  }, [bookName, pageNumber]);

  return (
    <div>
      <h1>Book Details</h1>
      <p>Book Name: {bookDetails.name}</p>
      <p>Page Number: {bookDetails.page}</p>
    </div>
  );
}