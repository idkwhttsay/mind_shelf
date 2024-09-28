import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ViewBook from './pages/ViewBook'
import FindBook from './pages/FindBook'
import './App.css'

const App = () => {
  const handleFindBookClick = () => {
    window.location.href = '/find';
  };

  return ( 
    <div className="App">
      <header>
        <h1 className="title">MindShelf</h1>
        <nav>
          <ul>
              <button onClick={handleFindBookClick} className="findBookButton">
                Get Started
              </button>
          </ul>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/book-details" element={<ViewBook />} />
          <Route path="/find" element={<FindBook />} />
          <Route path="/view-book" element={<ViewBook />} />
        </Routes>
      </main>
    </div>
  )
}

export default App