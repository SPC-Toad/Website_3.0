import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ < Homepage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App