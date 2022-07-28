// import { CreateListing } from "../listing/createListing";
import Nav from "../../components/nav/nav"
import Items from "../../components/shop/items"
import Cart from "../../components/shop/cart/cart";
import Shop from "../../components/shop/shop";

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
        <Shop />

    </div>
);
};

export default ShopPage;
