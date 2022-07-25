import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>


                    <FooterLinksItems>
                    <FooterLinkTitle>M38 Final Project</FooterLinkTitle>
                            
                           
                            <FooterLink to='/Contact'>Contact Us</FooterLink>
                            <FooterLink to='/About Us'>About Us</FooterLink>
                            <FooterLink to='/TermsConditions'>Terms & Conditions</FooterLink>
                            <FooterLink to='/Returns Policy'>Returns Policy</FooterLink>


                        
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    
                    <FooterLinksItems>
                    <FooterLinkTitle>M38 Final Project</FooterLinkTitle>
                            
                           
                    <FooterLink to='/Contact'>Contact Us</FooterLink>
                            <FooterLink to='/About Us'>About Us</FooterLink>
                            <FooterLink to='/TermsConditions'>Terms & Conditions</FooterLink>
                            <FooterLink to='/Returns Policy'>Returns Policy</FooterLink>

                        
                    </FooterLinksItems>


                

                </FooterLinksWrapper>

            </FooterLinksContainer>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer