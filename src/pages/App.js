import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';




import '../style/App.css';

function App() {


  return (
  <div>


    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>


  </div>
  );
}

export default App;
