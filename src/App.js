import "./App.scss";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route, HashRouter } from "react-router-dom";

import NavbarNav from "./components/NavbarNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import NavState from "./components/context/NavState";

import data from "./projects-data.json";

function App() {
  return (
    <NavState>
      <HashRouter>
        <Styles.Wrapper>
          <CSSReset />

          <NavbarNav />

          <Routes>
            {<Route path="/" element={<Home />} />}
            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects projects={data} />} />
            <Route
              path="/projects/:name"
              element={<Projects projects={data} />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Styles.Wrapper>
      </HashRouter>
    </NavState>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    height: 100%;
    width: 100vw;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
 
  }  

  body {
    font-size: 1.4rem;
    font-family: "Cairo", sans-serif;
    font-weight: 100;

    --color-background: #e6ebe0;
    --color-foreground: #1F2023;

    &.dark {
      --color-background: #1F2023;
      --color-foreground: #e6ebe0;
    }


    /* @media (prefers-color-scheme: dark) {
      --color-background: #1F2023;
      --color-foreground: #EFEFEF;
    } */
  }
`;

export default App;
