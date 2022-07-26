import {FaWindowClose} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {useCart} from "react-use-cart"


const Cart = (props) => {
  const {isEmpty,totalUniqueItems, items, updateItemQuantity, removeItem}= useCart();
  // if(!props.show){
  //   return null
  // }
  if(isEmpty) 
  return <p>Your cart is empty</p>

  return ( 
    <motion.div
      initial={{
      opacity: 0,
      x:500,
      scale: 0 
      }}
      animate={{
      opacity: 1,
      color: '#575f64',
      y: 0,
      x: 0,
      scale: 1
      }}
      transition={{
      ease: "easeIn",
      duration: .6
      }}
      >

      <button onClick={props.onClose}><FaWindowClose/></button>
      <div>
      <h4>Your Bag ({totalUniqueItems})</h4>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>

      </div>

  <div>
    <p> Your total is £ </p>
  </div>
  </motion.div>
  );
    }

    export default Cart;