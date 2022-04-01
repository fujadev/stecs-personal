import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './views/main/Home';


function App() {
  return (
    <div className='body'>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
