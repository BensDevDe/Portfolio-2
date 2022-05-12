import React, { useEffect, useRef, useContext, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import NavContext from '../context/NavContext'
import DarkContext from '../context/DarkContext'

import { CgDarkMode } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import whiteLogo from '../images/white.png'
import blackLogo from '../images/black.png'

const NavbarNav = () => {
  //NAVIGATION*****************************************************************
  const { openDrawerH, setOpenDrawerH } = useContext(NavContext)
  const drawerRef = useRef(null)

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return
      }
      setOpenDrawerH(true)
    }
    document.addEventListener('mousedown', closeDrawer)
    return () => document.removeEventListener('mousedown', closeDrawer)
  })

  //DARKMODE**********************************************************
  const { isDark, setIsDark } = useContext(DarkContext)

  const darkModeChange = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  //TRANSLATION
  const { i18n } = useTranslation('common')

  return (
    <Navbar.Wrapper>
      <Navbar.Logo>
        <NavLink style={linkStyle} onClick={() => setOpenDrawerH(true)} to='/'>
          {isDark ? (
            <Navbar.LogoImage src={whiteLogo}></Navbar.LogoImage>
          ) : (
            <Navbar.LogoImage src={blackLogo}></Navbar.LogoImage>
          )}

          <Navbar.LogoSpan openDrawer={!openDrawerH}>.</Navbar.LogoSpan>
        </NavLink>

        <SwitchContainer.Wrapper>
          <CgDarkMode role='button' onClick={() => darkModeChange()} />
          <select
            style={SwitchLanguage}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option style={LanguageOption} value='en'>
              EN
            </option>
            <option style={LanguageOption} value='de'>
              DE
            </option>
          </select>
        </SwitchContainer.Wrapper>
      </Navbar.Logo>
      <motion.div
        animate={{
          y: [-1400, 6400, -20, -20, 20, -20, 0, 20, 0],
          transition: { duration: 0.5, delay: 2 },
        }}
      >
        <HamburgerButton.Wrapper
          onClick={() => setOpenDrawerH(false)}
          openDrawer={!openDrawerH}
        >
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>
      </motion.div>
      <Navbar.Items ref={drawerRef} openDrawer={!openDrawerH}>
        <CloseButton.Wrapper
          style={CloseStyle}
          onClick={() => setOpenDrawerH(true)}
        >
          close
        </CloseButton.Wrapper>
        <motion.div
          animate={{
            x: [-140, -20, -20, 20, -20, 0, 20, 0],

            transition: { duration: 0.5, delay: 2 },
          }}
        >
          <Navbar.Item>
            <NavLink
              style={linkStyle}
              onClick={() => setOpenDrawerH(true)}
              to='/'
            >
              HOME
            </NavLink>
          </Navbar.Item>
        </motion.div>
        <Navbar.Item>
          {' '}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to='/about'
          >
            ABOUT
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {' '}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to='/projects'
          >
            PROJECTS
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {' '}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to='/contact'
          >
            CONTACT
          </NavLink>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  )
}

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    color: var(--color-foreground);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    position: absolute;
    width: 100vw;
    height: 10%;
    margin: 0 auto;
    padding: 1rem 3rem;

    @media only screen and (max-width: 60em) {
      max-width: 100%;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      z-index: 999;

      align-items: center;
    }
  `,
  Logo: styled.div`
    width: 11em;
    font-size: 5em;

    padding-left: 3rem;
    color: var(--color-foreground);
    font-size: 2em;
    cursor: pointer;

    display: flex;

    justify-content: space-between;
    align-items: center;

    &:hover {
      font-weight: bold;
    }

    @media only screen and (max-width: 60em) {
      height: 10%;
      width: 8em;
    }
  `,

  LogoImage: styled.img`
    width: 25%;

    &:hover {
      width: 30%;
    }

    @media only screen and (max-width: 60em) {
      width: 50%;
    }
  `,

  LogoSpan: styled.span`
    display: none;
    ${({ openDrawer }) =>
      openDrawer &&
      `
      display: inline;
      color: red; 
      font-weight: bold;
      `}
  `,
  Items: styled.ul`
    list-style: none;
    margin-top: 19px;

    width: 40vw;
    position: fixed;
    right: 0;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 3rem;
    border-right: 3px solid var(--color-foreground);

    transition: 0.25s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};

    @media only screen and (max-width: 60em) {
      font-size: 1.5em;
      margin-top: 0px;
      z-index: 1;
      height: 100%;
      width: 100%;

      background-color: var(--color-background);

      flex-direction: column;
      justify-content: center;
      gap: 20px;

      border: 2px solid var(--color-foreground);

      transition: 0.3s ease-out;
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0),` : `translateX(100%)`};

      ${({ openDrawer }) =>
        openDrawer &&
        `
      height: 100%;
      bottom: 0;
     
      `}
    }
  `,
  Item: styled.li`
    cursor: pointer;
    font-size: 1.4em;
    color: var(--color-foreground);

    &:hover {
      font-weight: bold;
    }
  `,
}

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3em;
    width: 3em;
    position: relative;
    font-size: 12px;
    margin: 0.8em 3rem;
    color: var(--color-foreground);

    display: block;

    ${({ openDrawer }) =>
      openDrawer &&
      `
      display: none;
     
      `}

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;
    color: var(--color-background);

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: '';
      width: 100%;
      background-color: var(--color-foreground);
      position: absolute;
    }
    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
}
const CloseButton = {
  Wrapper: styled.button`
    cursor: pointer;
    position: relative;
    font-size: 1em;
    font-weight: 100;
    margin-right: -1em;
    color: var(--color-foreground);

    display: flex;
    justify-content: center;
    align-items: center;

    /* Remove default button styles */
    border: none;
    background-color: transparent;
    outline: none;
    content: '';

    display: none;

    &:hover {
      font-weight: bold;
    }

    @media only screen and (max-width: 60em) {
      display: flex;
      font-size: 1em;
      position: absolute;
      bottom: 1.6em;
      right: 2.4em;
    }
  `,
}

const SwitchContainer = {
  Wrapper: styled.div`
    width: '4em';

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `,
}

const linkStyle = {
  fontSize: '1.1em',

  textDecoration: 'none',
  color: 'var(--color-foreground)',
}

const CloseStyle = {
  color: 'var(--color-foreground)',
}

const SwitchLanguage = {
  backgroundColor: 'transparent',
  color: 'var(--color-foreground)',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
}

const LanguageOption = {
  backgroundColor: 'var(--color-background)',
  color: 'var(--color-foreground)',
}

export default NavbarNav
