import { createListing } from "../../utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { InputListing, ListingOuter, ListingForm, BigBox, ListingTitle, ModalButton } from "./listing.styled.js"
import Nav from "../nav/nav";
import ListingModal from "../ListingModal/ListingModal";
import "./listing.css"
import Footer from "../Footer/footer";
import {BsShopWindow} from 'react-icons/bs';


const Listing = (ListObj, setter, user, ) => {
  const [name, setName] = useState();
  const [buyNowPrice, setBuyNowPrice] = useState();
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [showListingModal, toggleListingModal] = useState(false);

  function scroll(){
    document.body.style.overflow="hidden";
  }

  const submitListing = async (e) => {
		e.preventDefault();
			await createListing({  name, buyNowPrice, category, condition, description }, setter);
		};

  return (

    <div> 


    <div><Nav /></div>

    <div className="backgroundListing">
      <BigBox >
    <div>

    <div>
      <ListingModal {...{showListingModal, toggleListingModal, name, buyNowPrice, category, condition, description}} />
      <ModalButton onClick={()=>{toggleListingModal(true); scroll()}}><BsShopWindow/> Edit Listings</ModalButton>
    </div>
    </div>

    <div>
      <ListingTitle>Create Your Listing Here:</ListingTitle>
    </div>

      <ListingOuter >
      <ListingForm onSubmit={submitListing}>
        <InputListing
          onChange={(e) => setName(e.target.value)}
          placeholder="Listing title"
        />
        <div className="breaker" />
        <InputListing
          onChange={(e) => setBuyNowPrice(e.target.value)}
          placeholder="Buy it now Price"
        />
        <div className="breaker" />
        <InputListing
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <div className="breaker" />
        <InputListing
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
        />
        <div className="breaker" />
        <InputListing
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div className="breaker" />
        <ModalButton onClick={() => {submitListing(); toggleListingModal(true); scroll()}}>Create Listing</ModalButton>
      </ListingForm>
      </ListingOuter>
      </BigBox>
      <Footer />
      </div>
    </div>
  );
};
export default Listing;
