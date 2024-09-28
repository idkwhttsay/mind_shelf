import React from 'react'
import { useRef } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import ViewBook from './pages/ViewBook'
import FindBook from './pages/FindBook'
import './App.css'
import TypingEffect from './TypingEffect.jsx'

const App = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const audioRef = React.useRef(null);

  const handleGetStartedClick = () => {
    // Play sound on button click
    audioRef.current.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
    // Programmatically navigate to the Example Page
    navigate('/find');
  };

  return (
    <div> 
    <div className="App">
      <header className="App-header">
        <h1 className="title">Welcome to MindShelf!</h1>

        <p className="description">
          <TypingEffect 
            text="Started a book but got sidetracked? Promised to read more but ended up binge-watching instead? If you need a refresher on what you read, this is for you!" 
            speed={60} 
          />
        </p>

        <audio ref={audioRef} src="key.mp3" preload="auto" />

        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </header>
    </div>
    </div>
  )
}

export default App