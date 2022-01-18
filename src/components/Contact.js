import React, { useContext, useState } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import NavContext from "./context/NavContext";

import { send } from "emailjs-com";

const Contact = () => {
  const [thanksMessage, setThanksMessage] = useState(false);

  const handleThanksBox = () => {
    if (!thanksMessage) {
      document.querySelector(".confirm-bg-thanks").style.display = "flex";
      document.querySelector(".container-thanks").style.display = "flex";

      setThanksMessage(true);
    } else {
      document.querySelector(".confirm-bg-thanks").style.display = "none";
      document.querySelector(".container-thanks").style.display = "none";

      setThanksMessage(false);
    }
  };

  const [sendConfirmMessage, setSendConfirmMessage] = useState(false);

  const handleConfirmationBox = () => {
    if (!sendConfirmMessage) {
      document.querySelector(".confirm-bg").style.display = "flex";
      document.querySelector(".container").style.display = "flex";
      setSendConfirmMessage(true);
    } else {
      document.querySelector(".confirm-bg").style.display = "none";
      document.querySelector(".container").style.display = "none";
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
  let display = openDrawerH === true ? "block" : "none !important";

  //Translation**********************************************************************

  const { t } = useTranslation("common");

  //Styled Components****************************************************************

  // Contact Page****

  const ContactPage = {
    Wrapper: styled.section`
      width: 100vw;
      height: 100vh;
      font-size: 1.6em;

      color: var(--color-foreground);
      background-color: var(--color-background);

      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media only screen and (max-width: 60em) {
        height: 90%;
        position: absolute;

        top: 0;
        display: ${display};
      }
    `,

    // Contact Form Container

    FormContainer: styled.div`
      width: 50%;
    `,

    // Form

    Form: styled.form`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,

    // Input Container

    InputContainer: styled.div`
      width: 60%;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    Label: styled.label``,

    Input: styled.input`
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--color-foreground);
      width: 30em;
    `,

    // Select

    Select: styled.select`
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--color-foreground);
      color: var(--color-foreground);
      width: 30em;
    `,

    Option: styled.option`
      background-color: transparent;
      color: var(--color-foreground);
    `,

    // Textarea

    TextAreaContainer: styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    `,

    TextArea: styled.textarea`
      width: 100%;
      height: 20em;
      color: var(--color-foreground);
      margin-top: 10px;

      background-color: transparent;
      border-radius: 3px;
    `,

    //Button

    SubmitButton: styled.button`
      /* position: absolute;
      bottom: 20%;
      left: 38%; */

      margin-left: 55%;
      border: none;
      background-color: transparent;
      color: var(--color-foreground);

      width: 60px;
      height: 20px;
    `,

    //Link Container******************************************************************************************************************

    LinkContainer: styled.div``,
  };
  return (
    <ContactPage.Wrapper>
      <ContactPage.FormContainer>
        <ContactPage.Form onSubmit={onSubmit}>
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
              required
              value={toSend.subject}
              onChange={handleChange}
            >
              <ContactPage.Option value="">
                --Please choose one--
              </ContactPage.Option>
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
              type="text"
              name="message"
              autoComplete="off"
              placeholder="..."
              value={toSend.message}
              onChange={handleChange}
            ></ContactPage.TextArea>
          </ContactPage.TextAreaContainer>

          <ContactPage.SubmitButton type="submit">
            {t("contact.contactSend")}
          </ContactPage.SubmitButton>
        </ContactPage.Form>
      </ContactPage.FormContainer>
    </ContactPage.Wrapper>
  );
};

export default Contact;
