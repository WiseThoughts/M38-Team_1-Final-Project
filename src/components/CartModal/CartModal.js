import React, { useState } from 'react'
import { CartBackground, CartBody, CartHeader, CartModalButton, CartModalButtonWrapper, CartWrapper } from './CartModalStyling'
import Basket from '../../pages/shop/basket'
import {GiBasket} from "react-icons/gi"



const CartModal = ({showCartModal, toggleCartModal, CartModalHeader, CartModalBody}) => {


  return showCartModal ? (
    <div>
        <CartBackground />
            <CartWrapper>
                <CartHeader>{CartModalHeader} <GiBasket/></CartHeader>
                <CartBody> 
                {CartModalBody}
                
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