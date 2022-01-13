import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarNav from "./components/NavbarNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

//import NavContext from "./components/context/NavContext";
import NavState from "./components/context/NavState";

import data from "./projects-data.json";

function App() {
  // const open = useContext(NavContext);
  //console.log(open);

  return (
    <NavState>
      <BrowserRouter>
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

          {/* <Footer /> */}
        </Styles.Wrapper>
      </BrowserRouter>
    </NavState>
  );
}

const Styles = {
  Wrapper: styled.main`
    // display: flex;
    height: 100%;
    width: 100vw;
    background-color: rgba(52, 58, 64, 1);
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
    font-family: sans-serif;  
  }
`;

export default App;
