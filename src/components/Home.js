import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";

import { useTranslation } from "react-i18next";

// import imgMain from "../bgimg/IMG_ME.jpeg";

const Home = () => {
  const { openDrawerH } = useContext(NavContext);
  let display = openDrawerH === true ? "block" : "none !important";

  const { t } = useTranslation("common");

  const HomePage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 100vh;
      
      display: flex;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 60em) {
        height: 90%;
        position: absolute;
     
        top: 0;
        display: ${display};
      }
    `,

    Text: styled.div`
      width: 100vw;
      height: 100%;

      padding: 0 10vw;
      color: var(--color-foreground);
      background-color: var(--color-background);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `,

    Item: styled.p`
      font-size: 9em;

      @media only screen and (max-width: 60em) {
        font-size: 4em;
      }
     
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
