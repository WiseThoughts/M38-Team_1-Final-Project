import { createListing } from "../../utils";
import { useState } from "react";
import { InputListing, ListingOuter, ListingForm} from "./listing.styled.js"
import Nav from "../nav/nav";

const Listing = (ListObj, setter, user) => {
  const [name, setName] = useState();
  const [startingPrice, setStartingPrice] = useState();
  const [buyNowPrice, setBuyNowPrice] = useState();
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();



  const submitListing = async (e) => {
		e.preventDefault();
			await createListing({  name, startingPrice, buyNowPrice, category, condition, description }, setter);
	};



  return (

    <div>

    <Nav />

      <ListingOuter >
      <ListingForm onSubmit={submitListing}>
        <InputListing
          onChange={(e) => setName(e.target.value)}
          placeholder="Listing title"
        />
        <InputListing
          onChange={(e) => setStartingPrice(e.target.value)}
          placeholder="Starting Price"
        />
        <InputListing
          onChange={(e) => setBuyNowPrice(e.target.value)}
          placeholder="Buy it now Price"
        />
        <InputListing
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <InputListing
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
        />
        <InputListing
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={submitListing}>Create Listing</button>
      </ListingForm>
      </ListingOuter>
    </div>
  );
};
export default Listing;
