import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "./context/NavContext";

// import homeImg from "../bgimg/IMG_ME.jpeg";

const Home = () => {
  const { openDrawer } = useContext(NavContext);
  console.log(openDrawer);
  let display = openDrawer === true ? "block" : "none";
  //let display = "none";

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
      height: 90%;
      font-size: 2em;
      color: white;
      border: 1px solid white;

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
      {/* <img  src={homeImg} alt="" /> */}

      <HomePage.Text>
        {" "}
        <p>Ben Stautner</p>
        <p>Web Development</p>{" "}
      </HomePage.Text>
    </HomePage.Wrapper>
  );
};

export default Home;
