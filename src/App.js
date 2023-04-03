import React from 'react';
import { Blog } from './features/blogs/Blog';
import Navbar from './features/navbar/Navbar'
import './App.css';

function App() {
  return ( 
    <div>
      <Navbar />
    <Blog />
    </div>
  );
}

export default App;
