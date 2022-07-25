// // import { ContainerC, Button, BasketButton, FlexEnd } from "../css.styled/Shop.styled";
// import { faker } from "@faker-js/faker";
// import { useEffect, useState } from "react";
// // import "../css/Shop.css"
// import Basket from "../basket/basket";


// const Shop = () => {
//     const [cats, setCats] = useState([]);
//     const [error, setError] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const [show, setShow] = useState(false);



//     const addItem = (item)=>{
//         const exist = cartItems.find((x)=> x.id === item.id)
//         if (exist){
//         setCartItems(cartItems.map((x)=>
//         x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
//         } else{
//         setCartItems([...cartItems, {...item, qty:1}])
//         }
//     };

//     const removeItem = (item) =>{
//         const exist = cartItems.find((x)=> x.id === item.id)
//         if (exist.qty === 1){
//         setCartItems(cartItems.filter((x)=> x.id !== item.id))
//         } else {
//         setCartItems(cartItems.map((x)=>
//         x.id === item.id ? {...exist, qty: exist.qty - 1}: x))
//         }
//     };


//     const fetchImages = async () => {
//         try {
//         const response = await fetch(
//             "https://api.thecatapi.com/v1/images/search?limit=20"
//         );
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         const data = await response.json();
//         return data;
//         } catch (error) {
//             console.log(error);
//             setError("Couldn't fetch data(error 404)");
//             }
//         };

//     useEffect(() => {
//         const fetchData = async () => {
//         let catData = await fetchImages();
//         catData = catData.map((cats) => {
//             cats.name = faker.name.firstName();
//             cats.gender = faker.name.gender(true);
//             cats.catType = faker.animal.cat();
//             cats.word = faker.word.adjective();
//             cats.price = faker.commerce.price(100, 500, 0, "£");
//             cats.id = faker.commerce.price(0, 50000, 0)
//             return cats;
//             });
//         setCats(catData);
//         };
//         fetchData();
//     }, []);


// return ( 
//     <div>
//         <FlexEnd>
//         <BasketButton onClick={() => setShow(true)}>Basket</BasketButton>
//         <Basket cartItems={cartItems} removeItem={removeItem} addItem={addItem} title="Checkout Basket" onClose={() => setShow(false)}show={show}>
//         <p></p>
//         </Basket>
//         </FlexEnd>
//         <ContainerC>
//         {cats.map((cat) => {
//             return (
//                 <div key={cat.id} className="content" >
//                 <h3>{cat.name}</h3>
//                 <img className="img" src={cat.url} alt="cat pic" />
//                 <h4>{cat.price}</h4>
//                 <h5>{cat.catType}</h5>
//                 <h5>{cat.gender}</h5>
//                 <h5>This cat is: {cat.word}</h5>
//                 <Button className="button" onClick={() => addItem(cat)}>
//                     Take Me Home
//                 </Button>
//             {error && <p>{error}</p>}
//             </div>
//             );})}
//         </ContainerC>
// </div>
// );
// };

// export default Shop;

import React, { useContext } from 'react'


export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}