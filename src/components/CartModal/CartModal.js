import React, { useState } from 'react'
import { CartBackground, CartBody, CartHeader, CartModalButton, CartModalButtonWrapper, CartWrapper } from './CartModalStyling'
// import Basket, {item} from '../../pages/shop/basket'
import {GiBasket} from "react-icons/gi"





const CartModal = ({showCartModal, toggleCartModal, CartModalHeader, CartModalBody, cart}) => {


  return showCartModal ? (
    <div>
        <CartBackground />
            <CartWrapper>
                <CartHeader>{CartModalHeader} <GiBasket/></CartHeader>
                <CartBody> 
                {CartModalBody}
                render ({cart})
                
                </CartBody>

                <CartModalButtonWrapper>
                    <CartModalButton>Check Out</CartModalButton>
                    <CartModalButton onClick={()=> toggleCartModal(false)}>Cancel</CartModalButton>
                </CartModalButtonWrapper>
            </CartWrapper>
     
    </div>
  ) :null;
  }


export default CartModal