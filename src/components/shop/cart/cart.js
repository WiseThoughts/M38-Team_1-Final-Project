import {FaWindowClose} from 'react-icons/fa';
import { motion } from 'framer-motion';


const Cart = (props ) => {
  if(!props.show){
    return null
  }

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
      <h4>Your Bag</h4>
      </div>

  <div>
    <p> Your total is £</p>
  </div>
  </motion.div>
  );
    }

    export default Cart;