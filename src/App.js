import React from 'react';
import AllBlogs from './features/blogs/AllBlogs';
import Navbar from './features/navbar/Navbar'
import Create from './features/create/Create';
import About from './features/about/About';
import Blog from './features/blogs/Blog';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return ( 
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<AllBlogs />} />
          <Route path='/create' element={<Create />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
    </div>
  );
}

export default App;
