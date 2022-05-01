import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import imgB2 from '../images/DSC_2922.JPG'

import DarkContext from '../context/DarkContext'

import { FaSass, FaNodeJs } from 'react-icons/fa'
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
} from 'react-icons/si'
import { DiScrum } from 'react-icons/di'

const SkillsAbout = () => {
  const { isDark } = useContext(DarkContext)
  const { t } = useTranslation('common')

  return (
    <AboutPageSkills.Skills dark={isDark} img2={imgB2}>
      <AboutPageSkills.SkillsHead>
        {' '}
        {t('about.skills')}
      </AboutPageSkills.SkillsHead>

      <AboutPageSkills.SkillsContainer>
        <AboutPageSkills.SkillsBox>
          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://javascript.com/'
              rel='noreferrer'
            >
              <SiJavascript />
            </AboutPageSkills.SkillsLink>
            <span>Javascript</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://reactjs.org/'
              rel='noreferrer'
            >
              <SiReact />
            </AboutPageSkills.SkillsLink>
            <span>React</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://developer.mozilla.org/en-US/docs/Web/HTML'
              rel='noreferrer'
            >
              <SiHtml5 />
            </AboutPageSkills.SkillsLink>
            <span>HTML</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://developer.mozilla.org/de/docs/Web/CSS'
              rel='noreferrer'
            >
              <SiCss3 />
            </AboutPageSkills.SkillsLink>
            <span>CSS</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://sass-lang.com/'
              rel='noreferrer'
            >
              <FaSass />
            </AboutPageSkills.SkillsLink>
            <span>Sass</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://sass-lang.com/'
              rel='noreferrer'
            >
              <SiStyledcomponents />
            </AboutPageSkills.SkillsLink>
            <span>Styled Components</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://getbootstrap.com/'
              rel='noreferrer'
            >
              <SiBootstrap />
            </AboutPageSkills.SkillsLink>
            <span>Bootstrap</span>
          </AboutPageSkills.SkillsDiv>
        </AboutPageSkills.SkillsBox>

        <AboutPageSkills.SkillsBox>
          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.nodejs.org/'
              rel='noreferrer'
            >
              <FaNodeJs />
            </AboutPageSkills.SkillsLink>
            <span>Node.js</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://expressjs.com/de/'
              rel='noreferrer'
            >
              <SiExpress />
            </AboutPageSkills.SkillsLink>
            <span>Express</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.mongodb.com/'
              rel='noreferrer'
            >
              <SiMongodb />
            </AboutPageSkills.SkillsLink>
            <span>MongoDB Atlas</span>
          </AboutPageSkills.SkillsDiv>
        </AboutPageSkills.SkillsBox>

        <AboutPageSkills.SkillsBox>
          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.scrum.org/'
              rel='noreferrer'
            >
              <DiScrum />
            </AboutPageSkills.SkillsLink>
            <span>PROFESSIONAL SCRUM MASTER™</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.adobe.com/de/products/xd.html'
              rel='noreferrer'
            >
              <SiAdobexd />
            </AboutPageSkills.SkillsLink>
            <span>Adobe XD</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.adobe.com/de/products/photoshop.html'
              rel='noreferrer'
            >
              <SiAdobephotoshop />
            </AboutPageSkills.SkillsLink>
            <span>Adobe PS</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.adobe.com/de/products/photoshop-lightroom.html'
              rel='noreferrer'
            >
              <SiAdobelightroom />
            </AboutPageSkills.SkillsLink>
            <span>Adobe LR</span>
          </AboutPageSkills.SkillsDiv>

          <AboutPageSkills.SkillsDiv>
            <AboutPageSkills.SkillsLink
              target='_blank'
              href='https://www.figma.com/'
              rel='noreferrer'
            >
              <SiFigma />
            </AboutPageSkills.SkillsLink>
            <span>FIGMA</span>
          </AboutPageSkills.SkillsDiv>
        </AboutPageSkills.SkillsBox>
      </AboutPageSkills.SkillsContainer>
    </AboutPageSkills.Skills>
  )
}

const AboutPageSkills = {
  Skills: styled.div`
    padding: 0.5em 0.5em;
    color: var(--color-foreground);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background-image: ${({ dark }) =>
      dark
        ? `linear-gradient(
          rgba(64, 64, 64, 0.9),
        rgba(0, 0, 0, 0.9)
      ),
      url(${imgB2})`
        : `linear-gradient(
          rgba(255, 255, 255, 0.9),
    rgba(69,139,116, 0.9)
     
      ),
      url(${imgB2})`};

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.9;
  `,
  SkillsHead: styled.h1`
    font-size: 0.7em;
    font-weight: 100;
    margin-bottom: 20px;
  `,
  SkillsContainer: styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 60em) {
      flex-direction: column;
      width: 100%;
    }
  `,
  SkillsBox: styled.div`
    font-size: 0.2em;
    @media only screen and (max-width: 60em) {
      font-size: 0.3em;
    }
  `,
  SkillsDiv: styled.div`
    width: 100%;
    height: 50px;
    font-size: 0.9em;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
    span {
      color: var(--color-foreground);
      font-size: 0.9em;
      margin-left: 10px;
      &:hover {
        font-weight: 100;
        cursor: auto;
      }
    }
    @media only screen and (max-width: 60em) {
      font-size: 0.8em;
      height: 30px;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }

      span {
        color: var(--color-foreground);
        font-size: 1em;
        margin-left: 10px;

        &:hover {
          font-weight: 100;
          cursor: auto;
        }
      }
    }
  `,

  SkillsLink: styled.a`
    color: var(--color-foreground);
  `,
}

export default SkillsAbout
