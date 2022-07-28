import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Login from '../../components/login/login';
import Profile from "../profile/profile";
import ShopPage from '../shop/shopPage';
import About from "../about/about";
import Listing from "../listing/listing";


import './App.css';


function App() {

  const [user, setUser] = useState();
  const profilePic = faker.image.avatar();


  return (
  <div>

    <Routes>
        <Route path="/" element={<Login user={user} setter={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setter={setUser} profilePic={profilePic} />} />
        <Route path="/shopPage" element={<ShopPage user={user} setter={setUser}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/listing" element={<Listing/>} />
    </Routes>


  </div>
  );
};

export default App;
