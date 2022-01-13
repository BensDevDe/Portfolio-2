import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterPage.Wrapper>
      <FooterPage.Box></FooterPage.Box>
    </FooterPage.Wrapper>
  );
};

const FooterPage = {
  Wrapper: styled.section`


    width: 100vw;
    height: 5%;
    background-color: rgba(52, 58, 64, 1);
  

  
  `,

  Box: styled.div`
    color: white;
    border: 1px solid white;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default Footer;
