import "./basket.css"


const Basket = ({ cart, removeItem, addItem,}) => {



    return (
    <div >
        
        <div>
            <div>{cart.length === 0 && <div>No items in checkout</div>}</div>
            { cart.map( ( item ) => (
            <div key={item.id} >
                <h3>{ item.name }</h3>
                <div >
                <img src={ item.url } alt="basket item" />
                <div>
                <div >Sub-total: {(parseInt(item.price*item.qty))}</div>
                <div >
                <button 
                onClick={()=> addItem(item)}>
                +
                </button>
                <p >{item.qty}</p>
                <button 
                onClick={()=> removeItem(item) }>
                -
                </button>
                </div>
                </div>
                </div>
            </div>
            ))}
            </div>
            <h5 >Total: £</h5>
        </div>
    );
};
export default Basket;