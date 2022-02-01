import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";
import DarkContext from "./context/DarkContext";

import { useTranslation } from "react-i18next";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import imgB from "../images/IMG_ME.jpeg";

const onHover = {
  whileHover: { scale: 1.9 },
  transition: { duration: 1 },
};

const Home = () => {
  // const { display } = useContext(NavContext);
  // let display = openDrawerH === true ? "block" : "none !important";

  const { isDark } = useContext(DarkContext);

  const { openDrawerH } = useContext(NavContext);

  const { t } = useTranslation("common");

  return (
    <AnimatedPage>
      <HomePage.Wrapper display={openDrawerH} dark={isDark} img={imgB}>
        <HomePage.Text>
          {" "}
          <motion.div
            animate={{
              fontSize: ["0%", "50%", "75%", "140%", "100%"],

              transition: { duration: 0.4, delay: 1 },
            }}
          >
            <HomePage.Item>
              {" "}
              <motion.span variants={onHover}>B</motion.span>{" "}
              <HomePage.NameSpan>E</HomePage.NameSpan>{" "}
              <HomePage.NameSpan2>N</HomePage.NameSpan2> STAUTNER
            </HomePage.Item>
            <HomePage.Item>
              {" "}
              <HomePage.BoldSpan>
                {" "}
                {t("welcome.boldTitle")}{" "}
                <HomePage.NameSpan3>E</HomePage.NameSpan3>{" "}
                <HomePage.NameSpan4>B</HomePage.NameSpan4>{" "}
              </HomePage.BoldSpan>
              {t("welcome.title")}
            </HomePage.Item>{" "}
            <HomePage.LinkContainer>
              <HomePage.LinkElement
                target="_blank"
                href="https://github.com/BensDevDe"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </HomePage.LinkElement>
              <HomePage.LinkElement
                target="_blank"
                href="https://linkedin.com/in/ben-stautner-17a721226"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </HomePage.LinkElement>
              <HomePage.LinkElement
                target="_blank"
                href="mailto:info@webogies.com"
                rel="noreferrer"
              >
                {" "}
                <MdAlternateEmail />
              </HomePage.LinkElement>
              <HomePage.LinkElement
                target="_blank"
                href="https://instagram.com/webogies"
                rel="noreferrer"
              >
                <FaInstagram />
              </HomePage.LinkElement>
            </HomePage.LinkContainer>
          </motion.div>
        </HomePage.Text>
      </HomePage.Wrapper>
    </AnimatedPage>
  );
};

const HomePage = {
  Wrapper: styled.section`
    background-image: ${({ dark }) =>
      dark
        ? `linear-gradient(
        rgba(64, 64, 64, 0.9),
        rgba(0, 0, 0, 0.9)
      ),
      url(${imgB})`
        : `linear-gradient(
        rgba(242, 242, 242, 0.9),
        rgba(214, 214, 214, 0.9)
      ),
      url(${imgB})`};
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;

    overflow: hidden;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 3px solid var(--color-foreground);

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

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 60em) {
      padding: 0 em;
      
    }
  `,
  Item: styled.p`
    font-size: 9em;
    height: 100px;

    @media only screen and (max-width: 60em) {
      font-size: 3em;
      font-weight: bold;
      height: 30px;
    }
  `,
  BoldSpan: styled.span`
    margin-right: 22px;

    @media only screen and (max-width: 60em) {
      margin-right: 0px;
    }
  `,

  NameSpan: styled.span`
    margin-left: 4px;
    color: grey;

    @media only screen and (max-width: 60em) {
      margin-right: 4px;
    }
  `,
  NameSpan2: styled.span`
    margin-left: -25px;
    margin-right: 41px;
    color: grey;

    @media only screen and (max-width: 60em) {
      margin-right: 23px;
      margin-left: 0px;
    }
  `,
  NameSpan3: styled.span`
    margin-left: -25px;
    color: grey;

    @media only screen and (max-width: 60em) {
      margin-left: 0px;
    }
  `,
  NameSpan4: styled.span`
    margin-left: 0px;
    color: grey;

    @media only screen and (max-width: 60em) {
      margin-right: 20px;
    }
  `,

  LinkContainer: styled.div`
    width: 100%;
  

    display: none;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 60em) {
      width: 100%;
      height: 90%;
    
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      font-size: 1.2em;
      display: flex;
      margin-top: 20px;
    }
  `,

  LinkElement: styled.a`
    color: var(--color-foreground);
    text-decoration: none;
    font-size: 1.7em;
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
  `,
};

export default Home;
