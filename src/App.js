import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ < Loading /> } />
          <Route path='/homepage' element={ < Homepage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App