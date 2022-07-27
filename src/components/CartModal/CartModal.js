import React, { useState } from 'react'
import { CartBackground, CartBody, CartHeader, CartWrapper } from './CartModalStyling'
import Basket from '../../pages/shop/basket'

const CartModal = ({cart, removeItem, addItem}) => {
    const [show, setShow] = useState(false)

  return (
    <>
        <CartBackground />
            <CartWrapper>
                <CartHeader>Basket</CartHeader>
                <CartBody><Basket cart={cart} removeItem={removeItem} addItem={addItem} title="Checkout Basket" onClose={() => setShow(false)} show={show} />
            </CartBody>
            </CartWrapper>
     
    </>
  )
}

export default CartModal