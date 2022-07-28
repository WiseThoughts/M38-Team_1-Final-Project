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

import React, { useContext,useState,useEffect } from 'react'

function Productlist()
{
    const [data,setData]= useState([]);
    useEffect( async ()=>{
        let result = await fetch("https://dummyproducts-api.herokuapp.com")
        await result.json();
        setData(result)
    },[])
    return (
        <div>
            <h1>Product list</h1>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>image</td>
                </tr>
                {
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><img src={"http://localhost:3000/"+item.file_path}/></td>
                    </tr>
                    )
                }
        </div>
    )
};

export default Productlist;

