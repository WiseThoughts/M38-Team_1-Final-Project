import Nav from "../../components/nav/nav";
import { useState, useEffect } from "react";
import {BsCart4} from 'react-icons/bs'
import { faker } from "@faker-js/faker";
import { Navigate } from "react-router-dom";
import { BassketButton, BigBox, ListingContainer, ListingBox, ListingImg, ListingTitle, ListingCategory, ListingDescription, ListingTimer } from "./shop.styled"
import Countdown from 'react-countdown';
import CartModal from "../../components/CartModal/CartModal";
import "./shop.css"
import Footer from "../../components/Footer/footer";
import BidButton from "../../components/BidButton";



const Shop = () => {

    const [ setError] = useState()
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [showCartModal, toggleCartModal] = useState(false);


// api with products here  
//back up api link https://api.thecatapi.com/v1/images/search?limit=10   https://fakestoreapi.com/products

    const fetchImages = async () => {
        try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.log(error);
            setError("Couldn't fetch data(error 404)");
            }
        };

    useEffect(() => {
        const fetchData = async () => {
        let itemData = await fetchImages();
        itemData = itemData.map((items) => {
            items.id = faker.random.alphaNumeric(20)
            items.bid = faker.commerce.price(100, 500, 0, "£");
            items.buy = faker.commerce.price(100, 500, 0, "£");
            items.name = faker.commerce.productName();
            items.des = faker.commerce.productDescription(20);
            items.cate = faker.commerce.productAdjective(1);
            items.image = faker.image.business()
            return items;
            });
        setItems(itemData);
        };
        fetchData();
        
    }, []);

    


//add to Basket function
    const addItem = (item)=>{
        const exist = cart.find((x)=> x.id === item.id)
        if (exist){
        setCart(cart.map((x)=>
        x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
        } else{
        setCart([...cart, {...item, qty:1}])
        }
    };

    const removeItem = (item) =>{
        const exist = cart.find((x)=> x.id === item.id)
        if (exist.qty === 1){
        setCart(cart.filter((x)=> x.id !== item.id))
        } else {
        setCart(cart.map((x)=>
        x.id === item.id ? {...exist, qty: exist.qty - 1}: x))
        }
    };

    function openButton(){
        toggleCartModal(true);
    }
    function scroll(){
        document.body.style.overflow="hidden";
    }
    // let totalItems = 0;
    // for (const items of cart) {
    //     totalItems += items.quantity;
    // }

return (
    <div>

    <div>
        <Nav />
    </div>
    

    <div className="backgroundShop"> 
    <BigBox>
        
        <CartModal {... {cart, addItem, removeItem, showCartModal, toggleCartModal}} />
        
        <BassketButton onClick={() => {openButton(); scroll()}}><BsCart4 />{cart.reduce((accum,item) => accum + item.qty, 0)}</BassketButton>

        <div>
            {items.map((item) =>{
                return(
                    <ListingBox>

                    <ListingContainer>
                        <ListingImg src={item.image} alt = "Book Cover" />
            
                        <div className='column moveOverL'>
                        <ListingTitle>{item.title}</ListingTitle>
                        <ListingCategory>Category: {item.category}</ListingCategory>
                        <ListingCategory>Condition: [brand new]</ListingCategory>
                        <ListingDescription>{item.description}</ListingDescription>
                        <ListingTimer>Time left: <Countdown date={Date.now() + 10000} /></ListingTimer>
                        </div>


                        <div className='column postionEnd moveOverR'>
                        
                        <BidButton/>

                        <p>Buy it now: {item.buy}</p>
                        <button className="addToCart" onClick={() => addItem(item)}
                        >Add to Cart</button> 
                        </div>
                    </ListingContainer>
                    </ListingBox>

                )
            })}
        </div>


    </BigBox>
    <Footer />
    </div>
    </div>
);
};

export default Shop;
