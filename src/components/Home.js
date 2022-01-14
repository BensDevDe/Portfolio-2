import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";



const Home = () => {
  const { openDrawerH } = useContext(NavContext);
  let display = openDrawerH === true ? "block" : "none !important";

  const HomePage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 90%;
      background-color: rgba(52, 58, 64, 1);
      color: white;

      //    display: flex;
      //    justify-content; center;
      //    align-items: center;

      position: absolute;
      top: 10%;

      @media only screen and (max-width: 40em) {
        top: 0;
        display: ${display};
      }
    `,

    Text: styled.div`
      width: 100vw;
      height: 100%;
      font-size: 2em;
      color: white;
    

      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: rgba(52, 58, 64, 1);
    `,
  };

  // const ImgStyle = {
  //   width: "600%",
  //   height: "400%"

  // };

  return (
    <HomePage.Wrapper>
    

      <HomePage.Text>
        {" "}
        <p>Ben Stautner</p>
        <p>Web Development</p>{" "}
      </HomePage.Text>
    </HomePage.Wrapper>
  );
};

export default Home;
