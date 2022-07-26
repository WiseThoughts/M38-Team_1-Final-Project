import React from 'react';
import { ListingContainer, ListingBox, ListingImg, ListingTitle, ListingCategory, ListingDescription, ListingTimer } from './listing.styled';
import Countdown from 'react-countdown';
import "./listing.css";

//add to Basket function


const Listings = (addToCart, listing) => {

  return (
    <div>

    <ListingBox>
      <ListingContainer>
        <ListingImg src="https://images-eu.ssl-images-amazon.com/images/I/51a5K1yXFEL._SY291_BO1,204,203,200_QL40_ML2_.jpg" alt = "Book Cover" />

        <div className='column moveOverL'>
        <ListingTitle>The Family Remains</ListingTitle>
        <ListingCategory>Category: Books</ListingCategory>
        <ListingCategory>Condition: [brand new]</ListingCategory>
        <ListingDescription>The Family Remains: fro the author of the bla ablaba bfeifbehwg rkgberv hier gjkrebgjre vkjberkg rejibgre. Greaat read. </ListingDescription>
        <ListingTimer>Time left: <Countdown date={Date.now() + 10000} /></ListingTimer>
        
        
        </div>

        <div className='column postionEnd moveOverR'>
        <p>current bid: [currentPrice]</p>
        <button className="bid">Bid</button>
        <p>buy it now price: [£16.99]</p>
        <button className="addToCart" onClick={() => addToCart(listing)} >Add to Cart</button> 
        </div>
      </ListingContainer>
    </ListingBox>


    </div>



  )
}

export default Listings