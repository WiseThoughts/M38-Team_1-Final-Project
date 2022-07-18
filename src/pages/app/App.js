import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../home/home";
import Profile from "../profile/profile"


import './App.css';

function App() {


  return (
  <div>


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>


  </div>
  );
}

export default App;
