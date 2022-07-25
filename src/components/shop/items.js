import { useEffect, useState } from "react";
import Cart from "./cart/cart";


const Shop = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);



    const addItem = (item)=>{
        const exist = cartItems.find((x)=> x.id === item.id)
        if (exist){
        setCartItems(cartItems.map((x)=>
        x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
        } else{
        setCartItems([...cartItems, {...item, qty:1}])
        }
    };


    const removeItem = (item) =>{
        const exist = cartItems.find((x)=> x.id === item.id)
        if (exist.qty === 1){
        setCartItems(cartItems.filter((x)=> x.id !== item.id))
        } else {
        setCartItems(cartItems.map((x)=>
        x.id === item.id ? {...exist, qty: exist.qty - 1}: x))
        }
    };


    useEffect(() => {
        const fetchData = async () => {

        setItems();
        };
        fetchData();
    }, []);


return ( 
    <div>


        <button onClick={() => setShow(true)}>Basket</button>
        <Cart cartItems={cartItems} removeItem={removeItem} addItem={addItem} 
        title="Checkout Basket" onClose={() => setShow(false)}show={show}>
        </Cart>


    </div>
);
};

export default Shop;