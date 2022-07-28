import React from 'react'
import {FooterContainer, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.styled'

const Footer = () => {
    
    
    
    return (
    <FooterContainer>
        <FooterLinksItems>
            <FooterLinkTitle>M38 Final Project: JOB_WE_SEAK</FooterLinkTitle>
            <FooterLink to='/Contact'>Contact Us</FooterLink>
            <FooterLink to='/about'>About Us</FooterLink>
            <FooterLink to='/TermsConditions'>Terms & Conditions</FooterLink>
            <FooterLink to='/Returns Policy'>Returns Policy</FooterLink>
        </FooterLinksItems>
    </FooterContainer>
    )
}

export default Footer