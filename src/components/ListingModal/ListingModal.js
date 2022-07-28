import React, { useState, useEffect } from 'react'
import { ListingBackground, ListingBody, ListingButton, ListingButtonWrapper, ListingHeader, ListingMap, ListingMapWrap, ListingWrapper } from './Styling'




const ListingModal = ({showListingModal, toggleListingModal}) => {


    

  return showListingModal ? (
    <div>
        <ListingBackground />
        <ListingWrapper>
            <ListingHeader>For Sale</ListingHeader>
            <ListingBody>
            <ListingMapWrap>
                <ListingMap>
                    customised listing here

                </ListingMap>
            </ListingMapWrap>
            </ListingBody>
        <ListingButtonWrapper>
            <ListingButton>Publish Listings</ListingButton>
            <ListingButton onClick={()=>toggleListingModal(false)}>Cancel</ListingButton>
        </ListingButtonWrapper>

        </ListingWrapper>
    </div>

  ) :null;
}

export default ListingModal


