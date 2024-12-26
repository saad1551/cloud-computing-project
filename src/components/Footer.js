import React from 'react';
import { FooterContainer, FooterContent, ContactInfo } from './SharedStyles';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterContent>
            <ContactInfo>Contact us at: support@yaytube.com</ContactInfo>
            <ContactInfo>Phone: +1-555-123-4567</ContactInfo>
            <ContactInfo>&copy; {new Date().getFullYear()} YayTube. All rights reserved.</ContactInfo>
        </FooterContent>
    </FooterContainer>
  );
};

export default Footer;