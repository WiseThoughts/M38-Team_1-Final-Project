import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Login from '../../components/login/login';
import Profile from "../profile/profile";
import Shop from '../shop/shop';

import './App.css';


function App() {

  const [user, setUser] = useState();
  const profilePic = faker.image.avatar();


  return (
  <div>

    <Routes>
        <Route path="/" element={<Login user={user} setter={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setter={setUser} profilePic={profilePic} />} />
        <Route path="/shop" element={<Shop user={user} setter={setUser}/>} />
    </Routes>


  </div>
  );
}

export default App;
