import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import styled from 'styled-components'
import imgB from '../images/DSC_3252.JPG'

const Projects = () => {
  const ProjectPage = {
    Wrapper: styled.section`
      background-image: linear-gradient(
          rgba(109, 132, 197, 0.9),
          rgba(0, 0, 0, 0.9)
        ),
        url(${(props) => props.img});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;

      overflow: hidden;
      width: 100vw;
      height: 100vh;

      padding: 20% 0px;

      color: var(--color-foreground);
      border: 3px solid var(--color-foreground);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 10em;
      z-index: 1;

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
               display: flex !important;
        `}

        font-size: 5em;
        padding: 70% 0px;
      }
    `,
  }

  return (
    <AnimatedPage>
      <ProjectPage.Wrapper img={imgB}></ProjectPage.Wrapper>
    </AnimatedPage>
  )
}

export default Projects
