import { useState } from "react";
import { updateFetch, deleteFetch } from "../../utils/index";
import {
	ProfileForm,
	ProfileUpdateTitle,
	InputProfile,
	UpdateBtn,
	DeleteBtn,
	AddressInputProfile,
	TabBtn,
} from "./tabs.styled";
import "./tabs.css";



function Tabs({ user, setter }) {
	const [toggleState, setToggleState] = useState(1);
	const [username, setUsername] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [street, setStreet] = useState();
	const [city, setCity] = useState();
	const [postcode, setPostcode] = useState();

	const submitHandler = async (e) => {
		e.preventDefault();
		if (username === "") {
			setUsername(undefined);
		}
		if (name === "") {
			setName(undefined);
		}
		if (email === "") {
			setEmail(undefined);
		}
		if (password === "") {
			setPassword(undefined);
		}
		if (street === "") {
			setStreet(undefined);
		}
		if (city === "") {
			setCity(undefined);
		}
		if (postcode === "") {
			setPostcode(undefined);
		}
		
		await updateFetch(
			user, // used as filter, rest are the fields to be updated
			username,
			name,
			email,
			password,
			street,
			city,
			postcode
		);
		if (username) {
			setter(username);
		}
	};
	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="tabContainer">
			<div className="bloc-tabs">
				<TabBtn
					className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(1)}
				>
					Update
				</TabBtn>

				<TabBtn
					className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(2)}
				>
					Rating
				</TabBtn>

				<TabBtn
					className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(3)}
				>
					Bidding History
				</TabBtn>

				<TabBtn
					className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(4)}
				>
					Your Shop
				</TabBtn>
			</div>

			<div className="content-tabs">
				<div
					className={toggleState === 1 ? "content  active-content" : "content"}
				>
					<ProfileUpdateTitle>Update Profile: </ProfileUpdateTitle>

					<ProfileForm onSubmit={submitHandler}>
						<div className="column  ">
							<div className="row">
								<InputProfile
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Username"
								/>

								<InputProfile
									onChange={(e) => setName(e.target.value)}
									placeholder="Name"
								/>
							</div>

							<div className="formSpaces" />
							<div className="row">
								<InputProfile
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
								/>
								<InputProfile
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
									type="password"
									autoComplete="false"
								/>{" "}
							</div>

							<div className="formSpaces" />
							<div className="row">
								<AddressInputProfile
									onChange={(e) => setStreet(e.target.value)}
									placeholder="First Line of Address"
								/>

								<AddressInputProfile
									onChange={(e) => setCity(e.target.value)}
									placeholder="City"
								/>

								<AddressInputProfile
									onChange={(e) => setPostcode(e.target.value)}
									placeholder="Postcode"
								/>
							</div>

							<div className="formSpaces" />
							<div className="row">
								<UpdateBtn type="submit">Update</UpdateBtn>
							
								<DeleteBtn onClick={() => deleteFetch(setter)}>
									Delete Account
								</DeleteBtn>
							</div>
						</div>
					</ProfileForm>
				</div>

				<div
					className={toggleState === 2 ? "content  active-content" : "content"}
				>
					<ProfileUpdateTitle>Your rating is:</ProfileUpdateTitle>
					<p>⭐⭐⭐⭐⭐ 100%</p>
					<br/>
					<br/>
					<br/>
				</div>

				<div
					className={toggleState === 3 ? "content  active-content" : "content"}
				>
					<ProfileUpdateTitle>Your bidding history:</ProfileUpdateTitle>
					<p>View successful bids</p>
					<p>View unsucessful bids</p>
					<br/>
				</div>

				<div
					className={toggleState === 4 ? "content  active-content" : "content"}
				>
					<ProfileUpdateTitle>Your Shop:</ProfileUpdateTitle>
					<p>Your items </p>
					<br/>
					<br/>
					<br/>
				</div>
			</div>
		</div>
	);
}

export default Tabs;
