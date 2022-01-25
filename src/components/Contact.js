import React, { useContext, useState } from "react";
import AnimatedPage from "./AnimatedPage";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import NavContext from "./context/NavContext";

import { send } from "emailjs-com";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const [thanksMessage, setThanksMessage] = useState(false);

  const handleThanksBox = () => {
    if (!thanksMessage) {
      setThanksMessage(true);
    } else {
      setThanksMessage(false);
    }
  };

  const [sendConfirmMessage, setSendConfirmMessage] = useState(false);
  console.log(sendConfirmMessage);

  const handleConfirmationBox = () => {
    if (!sendConfirmMessage) {
      setSendConfirmMessage(true);
    } else {
      setSendConfirmMessage(false);
    }
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });

  const onConfirm = () => {
    send(
      "service_ggrmtqn",
      "template_30uietm",
      toSend,
      "user_f10RlSTnBDVKFHRKVzel4"
    )
      .then((response) => {
        console.log("Success", response.status, response.text);
        handleThanksBox();
      })
      .catch((err) => {
        alert("FAILED...", err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleConfirmationBox();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //Navbar Mobile********************************************************************

  const { openDrawerH } = useContext(NavContext);

  //Translation**********************************************************************

  const { t } = useTranslation("common");

  // Contact Page****

  return (
    <AnimatedPage>
      <ContactPage.Wrapper display={openDrawerH}>
        <ContactPage.FormContainer>
          <ContactPage.Form onSubmit={onSubmit}>
            <ContactPage.FormHead>Get In Touch ! </ContactPage.FormHead>
            <ContactPage.InputContainer>
              <ContactPage.Label htmlFor="name">
                {t("contact.contactName")}
              </ContactPage.Label>
              <ContactPage.Input
                type="text"
                name="from_name"
                required
                autoComplete="off"
                value={toSend.from_name}
                onChange={handleChange}
              ></ContactPage.Input>
            </ContactPage.InputContainer>
            <ContactPage.InputContainer>
              <ContactPage.Label htmlFor="email">
                {t("contact.contactMail")}
              </ContactPage.Label>
              <ContactPage.Input
                type="email"
                name="reply_to"
                required
                autoComplete="off"
                value={toSend.reply_to}
                onChange={handleChange}
              ></ContactPage.Input>
            </ContactPage.InputContainer>
            <ContactPage.InputContainer>
              <ContactPage.Label htmlFor="subject">
                {t("contact.contactSubject")}
              </ContactPage.Label>
              <ContactPage.Select
                type="text"
                name="subject"
                value={toSend.subject}
                onChange={handleChange}
              >
                <ContactPage.Option>--Please choose one--</ContactPage.Option>
                <ContactPage.Option value="Web-Development">
                  Web Development
                </ContactPage.Option>
                <ContactPage.Option value="UI/UX Design">
                  UI/UX Design
                </ContactPage.Option>
                <ContactPage.Option value="other">other</ContactPage.Option>
              </ContactPage.Select>
            </ContactPage.InputContainer>
            <ContactPage.TextAreaContainer>
              <ContactPage.Label htmlFor="message">
                {t("contact.contactMessage")}
              </ContactPage.Label>
              <ContactPage.TextArea
                rows="4"
                cols="50"
                type="text"
                name="message"
                autoComplete="off"
                value={toSend.message}
                onChange={handleChange}
              ></ContactPage.TextArea>
            </ContactPage.TextAreaContainer>

            <ContactPage.Confirmation disp={sendConfirmMessage}>
              <ContactPage.Text>
                <ContactPage.TextDiv>
                  <ContactPage.TextPH>
                    {t("contact.contactName")}:
                  </ContactPage.TextPH>
                  <ContactPage.TextP>{toSend.from_name}</ContactPage.TextP>
                </ContactPage.TextDiv>
                <ContactPage.TextDiv>
                  <ContactPage.TextPH>
                    {" "}
                    {t("contact.contactMail")}:{" "}
                  </ContactPage.TextPH>
                  <ContactPage.TextP>{toSend.reply_to}</ContactPage.TextP>
                </ContactPage.TextDiv>
                <ContactPage.TextDiv>
                  <ContactPage.TextPH>
                    {" "}
                    {t("contact.contactSubject")}:
                  </ContactPage.TextPH>
                  <ContactPage.TextP>{toSend.subject}</ContactPage.TextP>
                </ContactPage.TextDiv>
                <ContactPage.TextDiv>
                  <ContactPage.TextPH>
                    {" "}
                    {t("contact.contactMessage")}:
                  </ContactPage.TextPH>
                  <ContactPage.TextMessage>
                    {toSend.message}
                  </ContactPage.TextMessage>
                </ContactPage.TextDiv>
              </ContactPage.Text>

              <ContactPage.ButtonContainer>
                <ContactPage.CancelButton onSubmit={onSubmit}>
                  {t("contact.backButton")}
                </ContactPage.CancelButton>
                <ContactPage.ConfirmationButton onClick={() => onConfirm()}>
                  {t("contact.confirmButton")}
                </ContactPage.ConfirmationButton>
              </ContactPage.ButtonContainer>
            </ContactPage.Confirmation>

            <ContactPage.SubmitButton type="submit">
              {t("contact.contactSend")}
            </ContactPage.SubmitButton>
          </ContactPage.Form>

          <ContactPage.ThanksContainer thanks={thanksMessage}>
            <ContactPage.ThanksText>
              {t("contact.thanksText")}
            </ContactPage.ThanksText>
            <ContactPage.ButtonContainerThanks>
              <ContactPage.ContinueButton onClick={() => handleThanksBox()}>
                {t("contact.continueButton")}
              </ContactPage.ContinueButton>
            </ContactPage.ButtonContainerThanks>
          </ContactPage.ThanksContainer>
        </ContactPage.FormContainer>

        <ContactPage.BackgroundConfirm
          disp={sendConfirmMessage}
        ></ContactPage.BackgroundConfirm>

        <ContactPage.OrBorder></ContactPage.OrBorder>

        <ContactPage.LinkContainer>
          <ContactPage.LinkElement
            target="_blank"
            href="https://github.com/BensDevDe"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />
            <p>Github</p>
          </ContactPage.LinkElement>
          <ContactPage.LinkElement
            target="_blank"
            href="https://linkedin.com/in/ben-stautner-17a721226"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <p>Linkedin</p>
          </ContactPage.LinkElement>
          <ContactPage.LinkElement
            target="_blank"
            href="mailto:info@webogies.com"
            rel="noreferrer"
          >
            {" "}
            <MdAlternateEmail />
            <p>Mail</p>
          </ContactPage.LinkElement>
          <ContactPage.LinkElement
            target="_blank"
            href="https://instagram.com/webogies"
            rel="noreferrer"
          >
            <FaInstagram />
            <p>Instagram</p>
          </ContactPage.LinkElement>
        </ContactPage.LinkContainer>
      </ContactPage.Wrapper>
    </AnimatedPage>
  );
};

const ContactPage = {
  Wrapper: styled.section`
    width: 100vw;
    height: 100vh;
    font-size: 1.6em;

    color: var(--color-foreground);
    background-color: var(--color-background);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 60em) {
      display: none;
      flex-direction: column;

      ${({ display }) =>
        display &&
        `
    display: flex !important;
    height: 90%;
      position: absolute;
      top: 0;
    `}
    }
  `,

  // Contact Form Container

  FormContainer: styled.div`
    width: 60vw;

    @media only screen and (max-width: 60em) {
      width: 80vw;
    }
  `,

  // Form

  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  FormHead: styled.p`
    font-size: 3em;
    margin-bottom: 5vh;

    @media only screen and (max-width: 60em) {
      font-size: 1em;
    }
  `,

  // Input Container

  InputContainer: styled.div`
    width: 80%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 60em) {
      width: 100%;
    }
  `,

  Label: styled.label`
    font-size: 0.9em;

    @media only screen and (max-width: 60em) {
      font-size: 0.7em;
    }
  `,

  Input: styled.input`
    font-size: 0.9em;
    font-weight: 100;
    background-color: transparent;
    color: var(--color-foreground);
    border: none;
    border-bottom: 1px solid var(--color-foreground);
    width: 80%;

    &:focus {
      outline: none;
      background-color: var(--color-background);
    }

    @media only screen and (max-width: 60em) {
      font-size: 0.7em;
    }
  `,

  // Select

  Select: styled.select`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--color-foreground);
    color: var(--color-foreground);
    width: 80%;
    font-size: 0.9em;

    @media only screen and (max-width: 60em) {
      font-size: 0.7em;
    }
  `,

  Option: styled.option`
    background-color: var(--color-background);
    color: var(--color-foreground);
  `,

  // Textarea

  TextAreaContainer: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: 60em) {
      width: 100%;
    }
  `,

  TextArea: styled.textarea`
    width: 100%;
    height: 15em;
    color: var(--color-foreground);
    margin-top: 10px;

    background-color: transparent;
    border-radius: 3px;

    font-family: "Cairo", sans-serif;
    font-weight: 100;
    font-size: 2rem;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px red;
      background-color: var(--color-background);
    }
  `,

  // Submit Button

  SubmitButton: styled.button`
    height: 50px;
    width: 100px;
    font-size: 0.9em;
    font-weight: 100;
    background: transparent;
    color: var(--color-foreground);
    border: none;

    margin-top: 10px;

    position: absolute;
    left: 36.2%;

    position: relative;

    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    &:after {
      content: "";
      background: var(--color-foreground);
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }

    &:hover {
      cursor: pointer;
      color: #f24a44;
      border: 1px solid #f24a44;
      border-radius: 3px;
    }

    @media only screen and (max-width: 60em) {
      font-size: 0.6em;
    }
  `,

  //Confirmation Container

  Confirmation: styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    border: 2px solid var(--color-foreground);

    background-color: var(--color-background);
    width: 50vw;
    height: 60vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    border-radius: 0.3rem;
    padding: 1rem;
    z-index: 5;

    ${({ disp }) =>
      disp &&
      `
    display: block;
    `}

    @media only screen and (max-width: 60em) {
      width: 90vw;
      height: 40vh;
    }
  `,

  // TEXT FIELD

  Text: styled.div`
    width: 100%;
    color: var(--color-foreground);
    font-size: 0.9em;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 1em 2em;

    @media only screen and (max-width: 60em) {
      font-size: 0.5em;
    }
  `,

  TextDiv: styled.div`
    width: 25vw;
    display: flex;
    justify-content: space-between;

    margin-right: 2em;

    &:nth-of-type(4) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 90%;
    }

    @media only screen and (max-width: 60em) {
      width: 50vw;
    }
  `,
  TextPH: styled.p`
    margin-right: 2em;
    font-weight: 400;

    &:nth-of-type(4) {
      margin-top: 2.5em;
      margin-bottom: 1em;
    }
  `,

  TextP: styled.p`
    display: flex;
    justify-content: flex-start;

    &:nth-of-type(4) {
      margin-bottom: 1.9em;
    }
  `,

  TextMessage: styled.p`
    width: 100%;
    height: 15em;
    border: 1px solid var(--color-foreground);
    padding: 1rem 3rem;
    overflow: scroll;

    @media only screen and (max-width: 60em) {
      width: 75vw;
      height: 20em;
    }
  `,

  //BUTTON FIELD

  ButtonContainer: styled.div`
    width: 60%;
    display: flex;
    margin: 0 auto;

    justify-content: space-between;
  `,

  ConfirmationButton: styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    color: var(--color-foreground);
    text-decoration: none;
    border: 0.2px solid var(--color-foreground);
    padding: 10px;
    border-radius: 5px;

    position: relative;

    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    &:after {
      content: "";
      background: var(--color-background);
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }

    &:hover {
      cursor: pointer;
      background: #74c69d;
    }

    @media only screen and (max-width: 60em) {
      font-size: 0.5em;
      padding: 7px 10px;
    }
  `,

  CancelButton: styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    color: var(--color-foreground);
    text-decoration: none;
    border: 0.2px solid var(--color-foreground);
    padding: 10px;
    border-radius: 5px;

    position: relative;

    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-color: #b2b2b2;
      cursor: pointer;
    }

    @media only screen and (max-width: 60em) {
      font-size: 0.5em;
      padding: 7px 10px;
    }
  `,

  BackgroundConfirm: styled.div`
    position: fixed;
    display: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: --var(color-background);
    opacity: 0.1;
    overflow: hidden;
    z-index: 2;

    ${({ disp }) =>
      disp &&
      `
    display: block !important;
    `}
  `,

  ThanksContainer: styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    position: fixed;

    background-color: var(--color-background);

    width: 600px;
    height: 30vh;

    border: 2px solid var(--color-foreground);

    top: 30%;
    left: 50%;
    transform: translate(-50%, -75%);
    border-radius: 0.3rem;
    padding: 1rem;
    z-index: 5;

    ${({ thanks }) =>
      thanks &&
      `
    display: flex;
    `}

    @media only screen and (max-width: 60em) {
      width: 60vw;
    }
  `,

  ThanksText: styled.p`
    padding: 20px;
  `,

  ButtonContainerThanks: styled.div`
    width: 70%;
    display: flex;
    margin: 0 auto;
    margin-top: auto;
    justify-content: center;
    padding-bottom: 15px;
  `,

  ContinueButton: styled.button`
    display: inline-flex;
    background-color: var(--color-background);
    color: var(--color-foreground);
    padding: 0.7rem 1.4rem;
    border: none;
    border: 1px solid var(--color-foreground);
    border-radius: 0.3rem;
    font-size: 1rem;

    &:hover {
      background-color: #74c69d;
      cursor: pointer;
    }
  `,

  OrBorder: styled.div`
    height: 33vh;
    width: 2.5em;
    border-left: 1px solid var(--color-foreground);
    border-right: 1px solid var(--color-foreground);
    margin-right: 4em;

    @media only screen and (max-width: 60em) {
      display: none;
    }
  `,

  //Link Container******************************************************************************************************************

  LinkContainer: styled.div`
    width: 15vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;

    @media only screen and (max-width: 60em) {
      width: 60vw;
    }
  `,

  LinkElement: styled.a`
    font-size: 10rem;
    color: var(--color-foreground);

    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-of-type(1):hover {
      color: black;
    }

    &:nth-of-type(2):hover {
      color: #0a66c2;
    }

    &:nth-of-type(3):hover {
      color: #f5bf5f;
    }

    &:nth-of-type(4):hover {
      color: #d6249f;
    }

    p {
      font-size: 0.1em;
      @media only screen and (max-width: 60em) {
        display: none;
      }
    }

    @media only screen and (max-width: 60em) {
      font-size: 2em;
    }
  `,
};

export default Contact;
