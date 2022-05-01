import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import AnimatedPage from '../components/AnimatedPage'
import SkillsAbout from '../components/SkillsAbout'
import SkillsMe from '../components/MeAbout'
import styled from 'styled-components'

import imgB from '../images/museum.jpg'

import NavContext from '../context/NavContext'

import DarkContext from '../context/DarkContext'

const About = () => {
  const { openDrawerH } = useContext(NavContext)
  const { isDark } = useContext(DarkContext)
  const { t } = useTranslation('common')

  return (
    <AnimatedPage>
      <AboutPage.Wrapper display={openDrawerH} dark={isDark} img={imgB}>
        {t('about.title')}
        <AboutPage.AboutContainer>
          <SkillsAbout />
          <SkillsMe />
        </AboutPage.AboutContainer>
      </AboutPage.Wrapper>
    </AnimatedPage>
  )
}

const AboutPage = {
  Wrapper: styled.section`
    max-width: 100%;
    overflow-x: hidden;
    height: 100%;
    background-image: ${({ dark }) =>
      dark
        ? `linear-gradient(
        rgba(64, 64, 64, 0.9),
        rgba(0, 0, 0, 0.9)
      ),
      url(${imgB})`
        : `linear-gradient(
        rgba(255, 255, 242, 0.9),
        rgba(214, 214, 214, 0.9)
      ),
      url(${imgB})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    padding-top: 10rem;
    color: var(--color-foreground);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 10em;

    @media only screen and (max-width: 60em) {
      font-size: 5em;
      z-index: 1;

      ${({ display }) =>
        display &&
        `
             display: flex !important;
      `}

      font-size: 5em;
    }
  `,

  AboutContainer: styled.div`
    width: 100%;
    color: var(--color-background);

    @media only screen and (max-width: 60em) {
    }
  `,
}

export default About
