import React from "react";
import AnimatedPage from "./AnimatedPage";
import styled from "styled-components";
import imgB from "../images/2719DF3D-BFD9-4A7D-BFA8-ED936DE0675E.jpg";

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
      width: 100vw;
      height: 100vh;

      color: var(--color-background);
      border: 5px solid var(--color-foreground);

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
      }
    `,

    Head: styled.div`
      height: 100vh;
    


    `,
  };

  const ProjectContainer = {
    Wrapper: styled.div`
      width: 100%;
      height: 100%;
      color: var(--color-background);
    `,
  };
  return (
    <AnimatedPage>
      <ProjectPage.Wrapper img={imgB}>
      PROJECTS
      
      </ProjectPage.Wrapper>
    </AnimatedPage>
  );
};

export default Projects;
