import React, {useState} from "react";


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
        <button onClick = {bidClicker1}>+ £1</button>
        <button onClick = {bidClicker2}>+ £5</button>
        <button onClick = {bidClicker3}>+ £50</button>
        

    </div>
}

export default BidButton