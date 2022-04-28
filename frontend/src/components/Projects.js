import React from "react";
import AnimatedPage from "./AnimatedPage";
import styled from "styled-components";
import imgB from "../images/DSC_3252.JPG";

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
      height: 100%;

      padding: 20% 0px;

      color: var(--color-foreground);
      border: 3px solid var(--color-foreground);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 10em;

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
    WrapperSpan: styled.span`
    color: var(--color-foreground);
    font-size: 0.2em;
    `,

  
  };

  const ProjectContainer = {
    Wrapper: styled.div`
      color: var(--color-background);
      border: 3px solid var(--color-foreground);
    `,


  };
  
  return (
    <AnimatedPage>
      <ProjectPage.Wrapper img={imgB}>PROJECTS <ProjectPage.WrapperSpan>...coming soon</ProjectPage.WrapperSpan></ProjectPage.Wrapper>
 
      <ProjectContainer.Wrapper></ProjectContainer.Wrapper>
    </AnimatedPage>
  );
};

export default Projects;
