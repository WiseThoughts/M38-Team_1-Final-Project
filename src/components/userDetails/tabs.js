import { useState } from "react";
import "./tabs.css";


function Tabs() {
    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
    };



    return (
    <div className="container">
        <div className="bloc-tabs">
            <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
            >
            Rating
            </button>

            <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            >
            Bidding History
            </button>

            <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            >
            Your Shop
            </button>

        </div>


        <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <h2>Your rating is:</h2>
            <p>⭐⭐⭐⭐⭐ 100%</p>
            </div>


            <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <h2>Your bidding history</h2>
            <p>View successful bids</p>
            <p>View unsucessful bids</p>
            </div>


            <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <h2>Your Shop</h2>
            <p>Your items </p>
            </div>


        </div>
    </div>
    );
}


export default Tabs;