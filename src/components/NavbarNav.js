import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavContext from "./context/NavContext";

import navImg from '../bgimg/IMG_ME.jpeg'

import { VscEyeClosed } from "react-icons/vsc";

const NavbarNav = () => {
  const { openDrawerH, setOpenDrawerH } = useContext(NavContext);
  // const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it __> MEANS????????????? */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setOpenDrawerH(true);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  return (
    <Navbar.Wrapper>
      {/* <Content/> */}
      <Navbar.Logo>
        <NavLink style={linkStyle} to="/">
          BS
        </NavLink>
      </Navbar.Logo>

      <HamburgerButton.Wrapper onClick={() => setOpenDrawerH(false)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      <Navbar.Items ref={drawerRef} openDrawer={!openDrawerH}>
       
        <Navbar.Item>
          <NavLink style={linkStyle} to="/">
            HOME
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink style={linkStyle} to="/about">
            ABOUT
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink style={linkStyle} to="/projects">
            PROJECTS
          </NavLink>
        </Navbar.Item>
        <Navbar.Item>
          {" "}
          <NavLink style={linkStyle} to="/contact">
            CONTACT
          </NavLink>
        </Navbar.Item>
        <CloseButton.Wrapper onClick={() => setOpenDrawerH(true)}>
          X
        </CloseButton.Wrapper>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(52, 58, 64, 1);
    color: white;

    position: fixed;
    width: 100vw;
    height: 10%;

    margin: 0 auto;
    padding: 2em 3em;

    @media only screen and (max-width: 40em) {
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  `,
  Logo: styled.h1`
    padding: 0rem 1rem;
    color: white;
    font-size: 1.5em;

    @media only screen and (max-width: 40em) {
      z-index: 999;
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    width: 50vw;

    position: fixed;
    right: 0;
    top: 0;

    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(52, 58, 64, 1);
    color: white;
    padding: 2.2rem 3rem;

    transition: 0.2s ease-out;

    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};

    @media only screen and (max-width: 40em) {
      z-index: 1;

      height: 100%;
      width: 100%;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 80px;
     

      background-color: rgba(52, 58, 64, 1);
      padding: 1rem 2rem;

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
  Item: styled.h1`
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.5em;

    padding: 1rem 0;
    color: white;
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

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

      @media only screen and (max-width: 40em) {
      }
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: white;
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
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 3rem;
    color: white;

    padding: 0.5rem 3rem;

    // display: flex;
    // justify-content: center;
    // align-items: flex-start;

    /* Remove default button styles */
    border: none;
    background: transparent;
    // outline: none;
    margin-right: 15px;

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

    @media only screen and (max-width: 40em) {
      position: absolute;
      left: 83%;
      top: 93%;
      
    }
  `,
};

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

// const Content = styled.div`
//     border: 1px solid #000;
//     background-image: url(${navImg});
//     background-size: cover;
//     background-position: center;
//     width: 2000px;
//     height: 2000px;
// `;

export default NavbarNav;

// @media only screen and (max-width: 40em) {
//   position: fixed;
//   width: 100vw;
//   bottom: 0;
// }
