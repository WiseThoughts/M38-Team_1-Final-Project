import { createListing } from "../../utils";
import { useState } from "react";

const Listing = (ListObj, setter) => {
  const [name, setName] = useState();
  const [startingPrice, setStartingPrice] = useState();
  const [buyNowPrice, setBuyNowPrice] = useState();
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  // const [img, setImg] = useState();


  const submitListing = async (e) => {
		e.preventDefault();
			await createListing({  name, startingPrice, buyNowPrice, category, condition, description }, setter);
		};
	
  
  return (
    <div>
      <form onSubmit={submitListing}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Listing title"
        />
        <input
          onChange={(e) => setStartingPrice(e.target.value)}
          placeholder="Starting Price"
        />
           <input
          onChange={(e) => setBuyNowPrice(e.target.value)}
          placeholder="Buy it now Price"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={createListing}>Click to upload image</button>
      </form>
      {/* <button >Create listing</button> */}
    </div>
  );
};
export default Listing;
