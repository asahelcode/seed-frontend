import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
import Add from './pages/Add';
import BlogDetail from './pages/BlogDetail';
import Header from './features/Header/Header';
import Footer from './features/Footer/Footer';
import Blogs from './pages/Blogs';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/add' element={<Add />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/books' element={<Books />} />
        <Route path='/blogdetail/:id' element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
