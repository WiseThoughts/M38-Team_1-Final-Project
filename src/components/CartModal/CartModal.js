
import { CartBackground, CartBody, CartHeader, CartModalButton, CartModalButtonWrapper, CartWrapper, CartMap, CartMapOutline, ButtonLayout, AddBtn, MinusBtn, QTY, MaodalImage, Center } from './CartModalStyling'
import {GiBasket} from "react-icons/gi"






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
                <CartMapOutline >
                { cart.map( ( item ) => (
                <div key={item.id} >
                <CartMap >
                <Center >
                <h3>{ item.title }</h3>
                <MaodalImage src={item.image} alt = "item img" />
                <div>Sub-total: £{(parseInt(item.price*item.qty))}</div>
                </Center>
                <ButtonLayout>
                <AddBtn className="addButton"
                onClick={()=> addItem(item)}>
                +
                </AddBtn>
                <QTY className="qty">{item.qty}</QTY>
                <MinusBtn className="removeButton"
                onClick={()=> removeItem(item) }>
                -
                </MinusBtn>
                </ButtonLayout>
                </CartMap>
                </div>))}
                </CartMapOutline>
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