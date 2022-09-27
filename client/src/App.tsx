import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
