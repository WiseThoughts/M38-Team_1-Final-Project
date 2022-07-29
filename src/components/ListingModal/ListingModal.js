import React, { useState, useEffect } from 'react'
import { ListingBackground, ListingBody, ListingButton, ListingButtonWrapper, ListingHeader, ListingMapWrap, ListingWrapper, ListingBox, ListingContainer, ListingCategory, ListingDescription, ListingTimer, ListingTitle, ListingImg, BidButtons, BidButtonBox, AddToCartBTN, BuyText, BidPrice } from './listingMoadal.styling'
import Countdown from 'react-countdown';
import Logo from "../images/wisethoughts purple-yellow.png";



const ListingModal = ({showListingModal, toggleListingModal, name, buyNowPrice, category, condition, description}) => {

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

    function scroll(){
        document.body.style.overflow="";
    }

    return showListingModal ? (
    <div>
        <ListingBackground />
        <ListingWrapper>


            <ListingHeader>For Sale</ListingHeader>
            <ListingBody>
            <ListingMapWrap>
                
                
                
                            <ListingBox>

                            <ListingContainer>
                            <ListingImg src={Logo} alt = "Book Cover" />

                                <div className='column moveOverL'>
                                <ListingTitle>{name}</ListingTitle>
                                <ListingCategory>Category: {category}</ListingCategory>
                                <ListingCategory>Condition: {condition}</ListingCategory>
                                <ListingDescription>{description}</ListingDescription>
                                <ListingTimer>Time left: <Countdown date={Date.now() + 10000000} /></ListingTimer>
                                </div>


                                <div className='column postionEnd moveOverR'>
                                
                                <BidPrice>Bid Price: £{currentBid}</BidPrice>
                                <BidButtonBox>
                                <BidButtons onClick = {bidClicker1}>+ £1</BidButtons>
                                <BidButtons onClick = {bidClicker2}>+ £5</BidButtons>
                                <BidButtons onClick = {bidClicker3}>+ £50</BidButtons>
                                </BidButtonBox>

                                <BuyText>Buy it now: £{buyNowPrice}</BuyText>
                                <AddToCartBTN
                                >Add to Cart</AddToCartBTN> 
                                </div>
                            </ListingContainer>
                            </ListingBox>


                
            </ListingMapWrap>
            </ListingBody>
        <ListingButtonWrapper>
            <ListingButton>Publish Listings</ListingButton>
            <ListingButton onClick={()=>{toggleListingModal(false); scroll()}}>Cancel</ListingButton>
        </ListingButtonWrapper>

        </ListingWrapper>
    </div>

) :null;
}

export default ListingModal


