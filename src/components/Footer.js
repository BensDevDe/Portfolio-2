import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterPage.Wrapper>
      <FooterPage.Box>webogies.com</FooterPage.Box>
    </FooterPage.Wrapper>
  );
};

const FooterPage = {
  Wrapper: styled.section`
    width: 100vw;

    position: fixed;
    bottom: 0;

    @media only screen and (max-width: 60em) {
      display: none;
    }
  `,

  Box: styled.div`
    color: var(--color-foreground);
    background-color: var(--color-background);

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default Footer;
