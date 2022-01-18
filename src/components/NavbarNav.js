import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavContext from "./context/NavContext";

import { CgDarkMode } from "react-icons/cg";

import { useTranslation } from "react-i18next";

const NavbarNav = () => {
  //NAVIGATION*****************************************************************
  const { openDrawerH, setOpenDrawerH } = useContext(NavContext);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      setOpenDrawerH(true);
    };
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  });

  //DARKMODE**********************************************************
  const [isDark, setIsDark] = useState(true);
  const darkModeChange = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  //TRANSLATION
  const { t, i18n } = useTranslation("common");

  return (
    <Navbar.Wrapper>
      <Navbar.Logo>
        <p>BS</p>
        <CgDarkMode role="button" onClick={() => darkModeChange()}></CgDarkMode>
        {/* <div>
          {" "}
          <button onClick={() => i18n.changeLanguage("de")}>de</button>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </div> */}
      </Navbar.Logo>

      {/* <LanguageContainer.Wrapper name="language"> */}
      {/* </form>    <form action=""> */}
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
      {/* </LanguageContainer.Wrapper> */}

      <HamburgerButton.Wrapper onClick={() => setOpenDrawerH(false)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      <Navbar.Items ref={drawerRef} openDrawer={!openDrawerH}>
        <CloseButton.Wrapper
          style={CloseStyle}
          onClick={() => setOpenDrawerH(true)}
        >
          X
        </CloseButton.Wrapper>
        <Navbar.Item>
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to="/"
          >
            HOME
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to="/about"
          >
            ABOUT
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to="/projects"
          >
            PROJECTS
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink
            style={linkStyle}
            onClick={() => setOpenDrawerH(true)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    color: var(--color-foreground);
    background-color: var(--color-background);

    font-family: "Cairo", sans-serif;
    font-weight: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100vw;
    height: 10%:
    margin: 0 auto;
    padding: 1rem 3rem;

    @media only screen and (max-width: 60em) {
      height: 100vh;
      position: fixed;
      width: 100vw;
      bottom: 0;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  `,
  Logo: styled.div`
    width: 8em;
    padding: 0 3rem;
    color: var(--color-foreground);
    background: var(--color-background);
    font-size: 2em;
    cursor: pointer;

    display: flex;

    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 60em) {
      z-index: 999;
    }
  `,
  Items: styled.ul`
    list-style: none;
    background-color: var(--color-background);

    width: 60vw;
    position: fixed;
    right: 0;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 3rem;

    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};

    @media only screen and (max-width: 60em) {
      font-size: 1.5em;

      z-index: 1;
      height: 100%;
      width: 100%;

      flex-direction: column;
      justify-content: center;
      gap: 20px;

      transition: 0.2s ease-out;
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
    font-size: 1.5em;
    color: var(--color-foreground);
  `,
};

const LanguageContainer = {
  Wrapper: styled.select``,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3em;
    width: 3em;
    position: relative;
    font-size: 12px;
    margin: 0.8em 3rem;
    color: var(--color-foreground);

    display: none;

    display: block;

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
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
      content: "";
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
};

const CloseButton = {
  Wrapper: styled.button`
    cursor: pointer;
    position: relative;
    font-size: 3em;
    margin-right: -1em;
    color: var(--color-foreground);

    display: none;

    display: flex;
    justify-content: center;
    align-items: center;

    /* Remove default button styles */
    border: none;
    background-color: transparent;
    outline: none;

    @media only screen and (max-width: 60em) {
      font-size: 1.5em;
      position: absolute;
      bottom: 0.65em;
      right: 2.9em;
    }
  `,
};

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "var(--color-foreground)",
};

const CloseStyle = {
  color: "var(--color-foreground)",
};

const darkToggler = {
  margin: "1em 3em",
};

export default NavbarNav;
