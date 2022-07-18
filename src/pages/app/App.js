import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/login/login';
import Profile from "../profile/profile"


import './App.css';

function App() {

  const [user, setUser] = useState();

  return (
  <div>


    <Routes>
        <Route path="/" element={<Login user={user} setter={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setter={setUser} />} />
    </Routes>


  </div>
  );
}

export default App;
