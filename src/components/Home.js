import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";

import { useTranslation } from "react-i18next";

// import imgMain from "../bgimg/IMG_ME.jpeg";

const Home = () => {
  const { openDrawerH } = useContext(NavContext);
  let display = openDrawerH === true ? "block" : "none !important";

  const { t, i18n } = useTranslation("common");

  const HomePage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 100%;
      
     
      display: flex;
      justify-content; center;
      align-items: center;

      

      position: absolute;
      top: 5%;

      @media only screen and (max-width: 60em) {
        height: 90%;
        top: 0;
        display: ${display};
      }
    `,

    Text: styled.div`
      width: 100vw;
      height: 100%;

      padding: 0px 20vw;
      color: var(--color-foreground);
      background-color: var(--color-background);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `,

    Item: styled.p`
      font-size: 2em;
      font-weight: 100;
    `,
  };

  return (
    <HomePage.Wrapper>
      <HomePage.Text>
        {" "}
        <HomePage.Item>{t("welcome.name")}</HomePage.Item>
        <HomePage.Item>{t("welcome.title")}</HomePage.Item>{" "}
      </HomePage.Text>
    </HomePage.Wrapper>
  );
};

export default Home;
