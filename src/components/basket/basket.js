// import {FaWindowClose} from 'react-icons/fa';
// import { motion } from 'framer-motion';


// const Cart = (props ) => {
//   if(!props.show){
//     return null
//   }
    
//         return ( 
//             <motion.div className="cartContainer"
//             initial={{
//               opacity: 0,
//             x:500,
//             scale: 0 
//             }}
//             animate={{
//             opacity: 1,
//             color: '#575f64',
//             y: 0,
//             x: 0,
//             scale: 1
//             }}
//             transition={{
//               ease: "easeIn",
//               duration: .6
//             }}
//             >
//               <button className='cartBTN' onClick={props.onClose}><FaWindowClose/></button>
//               <div className="cartTitle">
//               <h4>Your Bag</h4>
//               </div>
//               {props.basket.map((cat, index) => {
//                 return (
//                         <div className="cart1">
//                             <div className="imgcnt">
//                                 <img src={cat.url} alt="" />
//                             </div>
//                             <div className="itemcontainer">
//                             <div className="cartItems">
//                             <div className="product">
//                             <p>{cat.breed} - X{cat.quantity}</p>
//                             </div>
//                             <div className="product">
//                             <p>£{cat.price} </p>
//                             </div>
//                             </div>    
//                             </div>
//                             <div className="rmvBtn">
//                               <button onClick={props.handleRemove}> <FaWindowClose/> </button>
//                             </div>
//                     </div>
//                 )})}
//                 <div className="totalSum">
//                 <p> Your total is £{props.total}</p>
//                 </div>
//             </motion.div>
//         );
//     }

//     export default Cart;

import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Global/CartContext'
import { Navbar } from './Navbar';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export const Cart = ({ user }) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <>
            <Navbar user={user} />
            <>
                {shoppingCart.length !== 0 && <h1>Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>Rs {cart.ProductPrice}.00</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                Rs {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )
};