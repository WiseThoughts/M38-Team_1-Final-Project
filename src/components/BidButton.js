import React, {useState} from "react";
import { BidButtons } from "./ListingModal/listingMoadal.styling";

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
        <BidButton onClick = {bidClicker1}>+ £1</BidButton>
        <BidButton onClick = {bidClicker2}>+ £5</BidButton>
        <BidButton onClick = {bidClicker3}>+ £50</BidButton>
        

    </div>
}

export default BidButton