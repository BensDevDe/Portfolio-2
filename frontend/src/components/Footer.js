import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaLinkedinIn, FaInstagram, FaXing } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <FooterPage.Wrapper>
      <FooterPage.Box>&copy;{getCurrentYear()} webogies.com</FooterPage.Box>
      <FooterPage.Box>
        <FooterPage.LinkContainer>
          <FooterPage.LinkElement
            target='_blank'
            href='https://github.com/BensDevDe'
            rel='noreferrer'
          >
            {' '}
            <FaGithub />
          </FooterPage.LinkElement>
          <FooterPage.LinkElement
            target='_blank'
            href='https://linkedin.com/in/ben-stautner-17a721226'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </FooterPage.LinkElement>
          <FooterPage.LinkElement
            target='_blank'
            href='mailto:info@webogies.com'
            rel='noreferrer'
          >
            {' '}
            <MdAlternateEmail />
          </FooterPage.LinkElement>
          <FooterPage.LinkElement
            target='_blank'
            href='https://instagram.com/webogies'
            rel='noreferrer'
          >
            <FaInstagram />
          </FooterPage.LinkElement>
          <FooterPage.LinkElement
            target='_blank'
            href='https://xing.com'
            rel='noreferrer'
          >
            <FaXing />
          </FooterPage.LinkElement>
        </FooterPage.LinkContainer>
      </FooterPage.Box>
    </FooterPage.Wrapper>
  )
}

const FooterPage = {
  Wrapper: styled.section`
    height: 5%;
    color: var(--color-foreground);
    background-color: var(--color-background);

    display: flex;
    justify-content: space-between;
    align-items: center;
   
    padding: 0.5em 4em;

    @media only screen and (max-width: 60em) {
      display: none;
    }
  `,

  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LinkContainer: styled.div`
    width: 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  LinkElement: styled.a`
    color: var(--color-foreground);
    text-decoration: none;
    &:nth-of-type(1):hover {
      color: #343a40;
    }
    &:nth-of-type(2):hover {
      color: #0a66c2;
    }
    &:nth-of-type(3):hover {
      color: #f5bf5f;
    }
    &:nth-of-type(4):hover {
      color: #d6249f;
    }

    &:nth-of-type(5):hover {
      color: #0598a0;
    }
  `,
}

export default Footer
