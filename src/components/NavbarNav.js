import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { VscEyeClosed } from "react-icons/vsc";

const NavbarNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);

  // with usecontext?????

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it __> MEANS????????????? */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setOpenDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  return (
    <Navbar.Wrapper>
      <Navbar.Logo>BS</Navbar.Logo>

      <HamburgerButton.Wrapper onClick={() => setOpenDrawer(true)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        <CloseButton.Wrapper onClick={() => setOpenDrawer()}>
          <VscEyeClosed style={CloseStyle} />
        </CloseButton.Wrapper>
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

    @media only screen and (max-width: 40em) {
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 1rem 3rem;
    color: white;

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
    padding: 1rem 3rem;

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
      margin-left: 50px;

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
  Item: styled.a`
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
    font-size: 2.8rem;
    color: white;

    margin-top: 7px;

    display: none;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;
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
      left: 90%;
      top: 95%;
    }
  `,
};

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const CloseStyle = {
  color: "white",
};

export default NavbarNav;

// @media only screen and (max-width: 40em) {
//   position: fixed;
//   width: 100vw;
//   bottom: 0;
// }