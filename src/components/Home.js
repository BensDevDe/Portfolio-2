import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";

import { useTranslation } from "react-i18next";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";

const Home = () => {
  const { openDrawerH } = useContext(NavContext);
  // let display = openDrawerH === true ? "block" : "none !important";

  const { t } = useTranslation("common");

  const HomePage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 5px solid var(--color-foreground);

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
    display: flex !important;
    `}
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
    `,
    Item: styled.p`
      font-size: 9em;
      height: 100px;

      @media only screen and (max-width: 60em) {
        font-size: 1.7em;
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

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
    display: none;
    `}
      }
    `,
  };

  return (
    <AnimatedPage>
      <HomePage.Wrapper>
        <HomePage.Text>
          {" "}
          <motion.div
            animate={{
              fontSize: ["0%", "50%", "75%", "120%", "100%"],

              transition: { duration: 0.4, delay: 1 },
            }}
          >
            <HomePage.Item>{t("welcome.name")}</HomePage.Item>
            <HomePage.Item>
              {t("welcome.title")}
              <HomePage.Blink>|</HomePage.Blink>
            </HomePage.Item>{" "}
          </motion.div>
        </HomePage.Text>
      </HomePage.Wrapper>
    </AnimatedPage>
  );
};

export default Home;
