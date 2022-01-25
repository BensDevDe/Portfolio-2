import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";

import { useTranslation } from "react-i18next";
import AnimatedPage from "./AnimatedPage";

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

      padding: 0 4em;
      color: var(--color-foreground);
      background-color: var(--color-background);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      animation-name: blackWhite;
      animation-iteration-count: 1;
      animation-duration: 3s;

      @keyframes blackWhite {
        0% {
          background-color: var(--color-background);
          color: var(--color-foreground);
        }
        50% {
          background-color: var(--color-background);
          color: var(--color-foreground);
        }
        51% {
          background-color: var(--color-foreground);
          color: var(--color-background);
        }
        100% {
          background-color: var(--color-foreground);
          color: var(--color-background);
        }
      }
    `,

    Item: styled.p`
      font-size: 9em;
      height: 100px;

      @media only screen and (max-width: 60em) {
        font-size: 3em;
        height: 50px;
      }
    `,

    Blink: styled.span`
      animation: blink 1100ms infinite;
      @keyframes blink {
        0%,
        50% {
          opacity: 0;
        }
        50.01%,
        100% {
          opacity: 1;
        }
      }
    `,
  };

  return (
    <AnimatedPage>
    <HomePage.Wrapper>
      <HomePage.Text>
        {" "}
        <HomePage.Item>{t("welcome.name")}</HomePage.Item>
        <HomePage.Item>
          {t("welcome.title")}
          <HomePage.Blink>|</HomePage.Blink>
        </HomePage.Item>{" "}
      </HomePage.Text>
    </HomePage.Wrapper>
    </AnimatedPage>
  );
};

export default Home;
