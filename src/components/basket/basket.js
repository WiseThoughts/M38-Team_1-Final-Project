import {FaWindowClose} from 'react-icons/fa';
import { motion } from 'framer-motion';


const Cart = (props ) => {
  if(!props.show){
    return null
  }
    
        return ( 
            <motion.div className="cartContainer"
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
              <button className='cartBTN' onClick={props.onClose}><FaWindowClose/></button>
              <div className="cartTitle">
              <h4>Your Bag</h4>
              </div>
              {props.basket.map((cat, index) => {
                return (
                        <div className="cart1">
                            <div className="imgcnt">
                                <img src={cat.url} alt="" />
                            </div>
                            <div className="itemcontainer">
                            <div className="cartItems">
                            <div className="product">
                            <p>{cat.breed} - X{cat.quantity}</p>
                            </div>
                            <div className="product">
                            <p>£{cat.price} </p>
                            </div>
                            </div>    
                            </div>
                            <div className="rmvBtn">
                              <button onClick={props.handleRemove}> <FaWindowClose/> </button>
                            </div>
                    </div>
                )})}
                <div className="totalSum">
                <p> Your total is £{props.total}</p>
                </div>
            </motion.div>
        );
    }

    export default Cart;