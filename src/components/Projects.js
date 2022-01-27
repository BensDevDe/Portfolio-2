import React from "react";
import AnimatedPage from "./AnimatedPage";
import styled from "styled-components";

const Projects = () => {
  const ProjectPage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 5px solid var(--color-foreground);

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
               display: flex !important;
        `}
      }
    `,
  };
  return (
    <AnimatedPage>
      <ProjectPage.Wrapper>
        <h1>PROJECTS</h1>
      </ProjectPage.Wrapper>
    </AnimatedPage>
  );
};

export default Projects;
