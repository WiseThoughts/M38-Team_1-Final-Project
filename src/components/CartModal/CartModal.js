import React, { useState, useEffect } from 'react'
import { CartBackground, CartBody, CartHeader, CartModalButton, CartModalButtonWrapper, CartWrapper } from './CartModalStyling'
import {GiBasket} from "react-icons/gi"
import Shop from '../../pages/shop/shop'





const CartModal = ({cart, addItem, removeItem, showCartModal, toggleCartModal, }) => {

  function closeButton(){
    toggleCartModal(false);
  }
  function scroll(){
    document.body.style.overflow="";
  }

  return showCartModal ? (
    <div>
        <CartBackground />
            <CartWrapper>
                <CartHeader>Basket <GiBasket/></CartHeader>
                <CartBody> 
                <CartBody>
                <p>Products</p>
                {cart.length === 0 && <div>Nothing in the basket</div>}
                </CartBody>
                { cart.map( ( item ) => (
                <div key={item.id} >
                <h3>{ item.name }</h3>
                <div>Sub-total: {(parseInt(item.price*item.qty))}</div>
                <button className="addButton"
                onClick={()=> addItem(item)}>
                +
                </button>
                <p className="qty">{item.qty}</p>
                <button className="removeButton"
                onClick={()=> removeItem(item) }>
                -
                </button>
                </div>))}
                </CartBody>

                <CartModalButtonWrapper>
                    <CartModalButton>Check Out</CartModalButton>
                    <CartModalButton onClick={()=>{ closeButton(); scroll() }}>Cancel</CartModalButton>
                </CartModalButtonWrapper>
            </CartWrapper>
    
    </div>
  ) :null;
  }


export default CartModal