import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Login from '../../components/login/login';
import Profile from "../profile/profile"


import './App.css';

function App() {

  const [user, setUser] = useState();
  const profilePic = faker.image.avatar()


  return (
  <div>


    <Routes>
        <Route path="/" element={<Login user={user} setter={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setter={setUser} profilePic={profilePic} />} />
    </Routes>


  </div>
  );
}

export default App;
