import './App.scss'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Routes, Route, HashRouter } from 'react-router-dom'

import NavbarNav from './components/NavbarNav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

import NavState from './context/NavState'
import DarkState from './context/DarkState'

import data from './data/projects-data.json'

function App() {
  return (
    <DarkState>
      <NavState>
        <HashRouter>
          <Styles.Wrapper>
            <CSSReset />

            <NavbarNav />

            <Routes>
              {<Route path='/' element={<Home />} />}
              <Route path='/about' element={<About />} />

              <Route path='/projects' element={<Projects projects={data} />} />
              <Route
                path='/projects/:name'
                element={<Projects projects={data} />}
              />

              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
          </Styles.Wrapper>
        </HashRouter>
      </NavState>
    </DarkState>
  )
}

const Styles = {
  Wrapper: styled.main`
    border: 3px solid var(--color-foreground);
    border-bottom: none;
  `,
}

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
    max-width: 100%;
    overflow-x: hidden;
 
  }  

  body {
    height: 100%;
    font-size: 1.4rem;
    font-family: "Cairo", sans-serif;
    font-weight: 100;
    max-width: 100%;
    overflow-x: hidden;

    --color-background: #f5ebe0;
    --color-foreground: black;

    &.dark {
      --color-background: black;
      --color-foreground: #f5ebe0;
    }


    /* @media (prefers-color-scheme: dark) {
      --color-background: black;
      --color-foreground: #f5ebe0;
    } */
  }
`

export default App
