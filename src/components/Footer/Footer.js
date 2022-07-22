import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
    <LinkColumn>

    <LinkTitle>Call</LinkTitle>
    <LinkItem href="+4915219324457" >+4915219324457</LinkItem>
    
    
    </LinkColumn>

    <LinkColumn>

    <LinkTitle>E-Mail</LinkTitle>
    <LinkItem href="mail to:osalu@uni-bremen.de" >osalu@uni-bremen.de</LinkItem>
    
    
    </LinkColumn>
    
    
    
    
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>

        <Slogan>Get in touch,let's build greatness...</Slogan>
      </CompanyContainer>

      
      
      <SocialIcons href="https://github.com/seunphology">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/saluoluwaseun">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://instagram.com/saluseun">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>


    </SocialIconsContainer>
    










    </FooterWrapper>
    
  );
};

export default Footer;
