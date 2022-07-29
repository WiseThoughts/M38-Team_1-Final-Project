import React, {useState} from "react";
import { BidButtons, BidButtonBox } from "./ListingModal/listingMoadal.styling";

const BidButton = () => {
 const [currentBid, setCurrentBid] = useState(0)

 const bidClicker1 = () => {
    setCurrentBid(currentBid+1)
    }

 const bidClicker2 = () => {
        setCurrentBid(currentBid+5)
    }
const bidClicker3 = () => {
        setCurrentBid(currentBid+50)
    }

    return <div>

        <div><p>Bid Price: £{currentBid}</p></div>
        <br></br>
        <BidButtonBox>
        <BidButtons onClick = {bidClicker1}>+ £1</BidButtons>
        <BidButtons onClick = {bidClicker2}>+ £5</BidButtons>
        <BidButtons onClick = {bidClicker3}>+ £50</BidButtons>
        </BidButtonBox>

    </div>
}

export default BidButton