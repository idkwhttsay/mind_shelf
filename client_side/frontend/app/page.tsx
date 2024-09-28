"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Router from 'next/navigation';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [bookName, setBookName] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number | string>('');
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Book Name: ${bookName}, Page Number: ${pageNumber}`);


    // If validation passes, trigger the Link click
    router.push(`/pages/test`);

    // Clear form fields
    setBookName('');
    setPageNumber('');
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>MindShelf</h1>
        <div className={styles.links}>
          <a href="/login" className={styles.link}>Login</a>
          <a href="/profile" className={styles.link}>Profile</a>
        </div>
      </nav>
      <main className={styles.main}>
        <h2>Enter the name of the book</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="bookName">Book Name:</label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="pageNumber">Page Number:</label>
            <input
              type="number"
              id="pageNumber"
              name="pageNumber"
              value={pageNumber}
              onChange={(e) => setPageNumber(Number(e.target.value))}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </main>
    </div>
  );
}
