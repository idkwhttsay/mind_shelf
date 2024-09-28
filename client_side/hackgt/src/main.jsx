import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import FindBook from './pages/FindBook.jsx'
import ViewBook from './pages/ViewBook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view-book" element={<ViewBook />} />
        <Route path="/find" element={<FindBook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)