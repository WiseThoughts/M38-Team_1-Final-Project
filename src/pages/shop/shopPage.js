import Nav from "../../components/nav/nav"
import Items from "../../components/shop/items"
import Cart from "../../components/shop/cart/cart";
import { useState, useEffect } from "react";
import Listing from "./Listings";
import { fetchListings } from "../../utils";


const ShopPage = () => {

const [listing, setListing] = useState([])
const [cart, setCart] = useState([])

// api with products here  

useEffect(() => {
    fetchListings(setListing);
}, [])


//add to Basket function
const addToCart = (listing) => {
    let tempCart =[...cart];
    tempCart.push(listing)
    setCart(tempCart)
    console.log(setCart)
}

return (
    <div>

    <div>
        <Nav />
    </div>

    <div className ="shopItem">
        
       <Listing/> <button className = "addToCart" onClick={() => addToCart(listing)} >Add to Cart</button> 

       <Listing/> <button  className = "addToCart" onClick={() => addToCart(listing)}>Add to Cart</button> 

       <Listing/> <button  className = "addToCart" onClick={() => addToCart(listing)}>Add to Cart</button> 

       <Listing/> <button  className = "addToCart" onClick={() => addToCart(listing)}>Add to Cart</button> 


    </div>

    <div>
        <Cart />
    </div>

    <div>
        <Items />
    </div>


    </div>
);
};

export default ShopPage;
