import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import imgB3 from '../images/bfinal.jpg'

import DarkContext from '../context/DarkContext'

const SkillsMe = () => {
  const { isDark } = useContext(DarkContext)
  const { t } = useTranslation('common')

  return (
    <AboutPageMe.Me dark={isDark} img3={imgB3}>
      {' '}
      <AboutPageMe.MeHead> {t('about.me')}</AboutPageMe.MeHead>
      <AboutPageMe.MeContainer>
        <AboutPageMe.MeContainerHead>
          <AboutPageMe.MeContainerHead_H>
          {t('about.me_head')}
          </AboutPageMe.MeContainerHead_H>
          <AboutPageMe.MeContainerText>
            {t('about.me_text')}
          </AboutPageMe.MeContainerText>
        
        </AboutPageMe.MeContainerHead>
      </AboutPageMe.MeContainer>
    </AboutPageMe.Me>
  )
}

const AboutPageMe = {
  Me: styled.div`
    width: 100%;
    height: 100%;
    padding: 0rem 5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    background-image: ${({ dark }) =>
      dark
        ? `linear-gradient(
    rgba(47, 79, 79, 0.9),
    rgba(0, 0, 0, 0.9)
  ),
  url(${imgB3})`
        : `linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 224, 0.9)
  ),
  url(${imgB3})`};

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    opacity: 0.8;

    @media only screen and (max-width: 60em) {
      width: 100%;
    }
  `,
  MeHead: styled.h1`
    font-size: 0.7em;
    font-weight: 100;
    color: var(--color-foreground);
  `,

  MeContainer: styled.div`
  text-align: right;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 5em;
  `,
  MeContainerHead: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.2em;
    color: var(--color-foreground);
    text-align: justify;
  `,
  MeContainerHead_H: styled.h3`
  margin-bottom: 10px;
  
  `,
  MeContainerText: styled.p`
    text-align: justify;
  `,
}

export default SkillsMe
