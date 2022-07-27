import { useState} from "react";
import { Route, Routes } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Login from "../../components/login/login";
import Profile from "../profile/profile";
import ShopPage from "../shop/shopPage";
import About from "../about/about";
import Basket from "../shop/basket";
import Listing from '../../components/createListing/createListing';

import "./App.css";


function App() {
	const [user, setUser] = useState();
	const profilePic = faker.image.avatar();


	return (
		<div>
			{/* {!user && <Navigate to="/" />} */}
			<Routes>
				<Route path="/" element={<Login user={user} setter={setUser} />} />
				<Route
					path="/profile"
					element={
						<Profile user={user} setter={setUser} profilePic={profilePic} />
					}
				/>
				<Route
					path="/shopPage"
					element={<ShopPage user={user} setter={setUser} />}
				/>
				<Route path="/about" element={<About />} />
				<Route
					path="/listing"
					element={<Listing user={user} setter={setUser} />}
				/>
				<Route
					path="/basket"
					element={<Basket />}
				/>
			</Routes>
		</div>
	);
}

export default App;
