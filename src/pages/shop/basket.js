


const Basket = ({show, onClose, title, cartItems, removeItem, addItem,}) => {



    return (
    <div 
        className={`modal ${show ? "show" : ""}`}
        onClick={onClose}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
            <h4 className="modalTitle">{title}</h4>
            <button onClick={onClose} className="btn">
            &times;
            </button>
        </div>
        <div className="modalBody">
            <div>{cartItems.length === 0 && <div>No Cats added</div>}</div>
            { cartItems.map( ( item ) => (
            <div key={item.id} className="Cat" >
                <h3>{ item.name }</h3>
                <div className="mainBox">
                <img className="basketImg" src={ item.url } alt="basket item" />
                <div>
                <div className="price">Sub-total: {(parseInt(item.price*item.qty))}</div>
                <div className="mainButtons">
                <button className="addButton"
                onClick={()=> addItem(item)}>
                +
                </button>
                <p className="qty">{item.qty}</p>
                <button className="removeButton"
                onClick={()=> removeItem(item) }>
                -
                </button>
                </div>
                </div>
                </div>
            </div>
            ))}
            </div>
            <h5 className="modalFooter">Total: £</h5>
        </div>
    </div>
    );
};
export default Basket;