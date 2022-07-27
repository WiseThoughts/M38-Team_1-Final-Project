import React, { useState } from 'react'
import { CartBackground, CartBody, CartHeader, CartModalButton, CartModalButtonWrapper, CartWrapper } from './CartModalStyling'
import Basket, {item} from '../../pages/shop/basket'
import {GiBasket} from "react-icons/gi"
import ShopPage from '../../pages/shop/shopPage'





const CartModal = ({cart, addItem, removeItem, showCartModal, toggleCartModal, CartModalHeader, CartModalBody}) => {

  // const [cart, setCart] = useState([])


  return showCartModal ? (
    <div>
        <CartBackground />
            <CartWrapper>
                <CartHeader>{CartModalHeader} <GiBasket/></CartHeader>
                <CartBody> 
                {CartModalBody}
              <div>{cart.length === 0 && <div>Nothing in the basket</div>}</div>
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
                    <CartModalButton onClick={()=> toggleCartModal(false)}>Cancel</CartModalButton>
                </CartModalButtonWrapper>
            </CartWrapper>
    
    </div>
  ) :null;
  }


export default CartModal