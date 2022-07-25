import Nav from "../../components/nav/nav"
import Items from "../../components/shop/items"
import Cart from "../../components/shop/cart/cart";


const ShopPage = () => {


return (<div>

    <div>
        <Nav />
    </div>

    <div>
        <h1>Shop</h1>
    </div>

    <div>
        <Cart />
    </div>
    <div>
        <Items />
    </div>


    </div>
);
};

export default ShopPage;
