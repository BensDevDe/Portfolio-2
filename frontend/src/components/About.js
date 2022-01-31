import React from "react";

import AnimatedPage from "./AnimatedPage";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import imgB from "../images/museum.jpg";
import imgB2 from "../images/DSC_2922.JPG";

import { FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobexd,
  SiFigma,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

const About = () => {




  const AboutPage = {
    Wrapper: styled.section`
      background-image: linear-gradient(
          rgba(155, 155, 155, 0.9),
          rgba(0, 0, 0, 0.9)
        ),
        url(${(props) => props.img});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;

      width: 100vw;
      height: 100%;
  

      padding: 20% 0;

      color: var(--color-foreground);
      border: 3px solid var(--color-foreground);
      border-bottom: none;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      font-size: 10em;

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
               display: flex !important;
        `}

        font-size: 5em;
       
      }
    `,

    AboutContainer: styled.div`
      width: 100vw;
      height: 100%;

      color: var(--color-background);

      border: 3px solid var(--color-foreground);
      border-top: none;
      border-bottom: none;

      
    `,

    Skills: styled.div`
        opacity: 0.8;
      padding: 0rem 5rem;
      padding-bottom: 10%;
      height: 100%;

      background-image: linear-gradient(
          rgba(255, 180, 180, 0.9),
          rgba(0, 0, 0, 0.9)
        ),
        url(${(props) => props.img2});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;

      background-color: var(--color-background);

      width: 100vw;
      height:100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `,

    SkillsHead: styled.h1`
      font-size: 1em;
      font-weight: 100;
      color: var(--color-foreground);

      margin: 100px 0px 30px 0px;
    `,

    SkillsContainer: styled.div`
      width: 80vw;
      display: flex;
      justify-content: center;
    `,

    SkillsBox: styled.div`
      font-size: 0.2em;
    `,

    SkillsDiv: styled.div`
      width: 500px;
      height: 50px;
      font-size: 1em;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }

      span {
        color: var(--color-foreground);
        font-size: 1em;
        margin-left: 10px;
      }
    `,

    SkillsLink: styled.a`
      color: var(--color-foreground);
    `,
  };

  return (
    <AnimatedPage>
      <AboutPage.Wrapper img={imgB}>
        ABOUT
        <AboutPage.AboutContainer>
          <AboutPage.Skills img2={imgB2}>
            <AboutPage.SkillsHead>SKILLS</AboutPage.SkillsHead>

            <AboutPage.SkillsContainer>
              <AboutPage.SkillsBox>
                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://javascript.com/"
                    rel="noreferrer"
                  >
                    <SiJavascript />
                  </AboutPage.SkillsLink>
                  <span>Javascript</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://reactjs.org/"
                    rel="noreferrer"
                  >
                    <SiReact />
                  </AboutPage.SkillsLink>
                  <span>React</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    rel="noreferrer"
                  >
                    <SiHtml5 />
                  </AboutPage.SkillsLink>
                  <span>HTML</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://developer.mozilla.org/de/docs/Web/CSS"
                    rel="noreferrer"
                  >
                    <SiCss3 />
                  </AboutPage.SkillsLink>
                  <span>CSS</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://sass-lang.com/"
                    rel="noreferrer"
                  >
                    <FaSass />
                  </AboutPage.SkillsLink>
                  <span>Sass</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://sass-lang.com/"
                    rel="noreferrer"
                  >
                    <SiStyledcomponents />
                  </AboutPage.SkillsLink>
                  <span>Styled Components</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://getbootstrap.com/"
                    rel="noreferrer"
                  >
                    <SiBootstrap />
                  </AboutPage.SkillsLink>
                  <span>Bootstrap</span>
                </AboutPage.SkillsDiv>
              </AboutPage.SkillsBox>

              <AboutPage.SkillsBox>
                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.nodejs.org/"
                    rel="noreferrer"
                  >
                    <FaNodeJs />
                  </AboutPage.SkillsLink>
                  <span>Node.js</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://expressjs.com/de/"
                    rel="noreferrer"
                  >
                    <SiExpress />
                  </AboutPage.SkillsLink>
                  <span>Express</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.mongodb.com/"
                    rel="noreferrer"
                  >
                    <SiMongodb />
                  </AboutPage.SkillsLink>
                  <span>MongoDB Atlas</span>
                </AboutPage.SkillsDiv>
              </AboutPage.SkillsBox>

              <AboutPage.SkillsBox>
                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.scrum.org/"
                    rel="noreferrer"
                  >
                    <DiScrum />
                  </AboutPage.SkillsLink>
                  <span>PROFESSIONAL SCRUM MASTER™</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.adobe.com/de/products/xd.html"
                    rel="noreferrer"
                  >
                    <SiAdobexd />
                  </AboutPage.SkillsLink>
                  <span>Adobe XD</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.adobe.com/de/products/photoshop.html"
                    rel="noreferrer"
                  >
                    <SiAdobephotoshop />
                  </AboutPage.SkillsLink>
                  <span>Adobe PS</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.adobe.com/de/products/photoshop-lightroom.html"
                    rel="noreferrer"
                  >
                    <SiAdobelightroom />
                  </AboutPage.SkillsLink>
                  <span>ADOBE LR</span>
                </AboutPage.SkillsDiv>

                <AboutPage.SkillsDiv>
                  <AboutPage.SkillsLink
                    target="_blank"
                    href="https://www.figma.com/"
                    rel="noreferrer"
                  >
                    <SiFigma />
                  </AboutPage.SkillsLink>
                  <span>FIGMA</span>
                </AboutPage.SkillsDiv>
              </AboutPage.SkillsBox>
            </AboutPage.SkillsContainer>
          </AboutPage.Skills>
        </AboutPage.AboutContainer>
      </AboutPage.Wrapper>
    </AnimatedPage>
  );
};

export default About;
