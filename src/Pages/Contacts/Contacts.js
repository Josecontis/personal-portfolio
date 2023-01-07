import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import { Container, Input, Text } from "./contacts.styles";
import CustomAlert from "./Alert/alert.component";
import { useLocation } from "react-router-dom";

export const Contacts = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/contacts")
      document.title = "Contacts | Giuseppe Conticchio";
  }, [location]);

  const [emailData, setEmailData] = useState({
    emailFlag: false,
    nameFlag: false,
    txtFlag: false,
    testFlag: 0,
  });

  function sendEmail(e) {
    e.preventDefault();

    let templateParams = {
      from_name: document.getElementById("name").value,
      subject: document.getElementById("subject").value,
      to_name: "peppeco98@gmail.com",
      message_html: document.getElementById("message").value,
      from_email: document.getElementById("email").value,
      reply_to: document.getElementById("email").value,
    };

    if (templateParams.from_email === "") setEmailData({ testFlag: -1 });
    else {
      setEmailData({ testFlag: 1 });
      emailjs.send(
        "service_dx9tuej",
        "template_03o7ni1",
        templateParams,
        "user_a25h2t1IePEbQPptKN2TZ"
      );
    }
  }

  const emailConstraints = (content) => {
    if (content.target.value === "") setEmailData({ emailFlag: false });
    //setta dinamicamente l'attivazione del bottone
    else setEmailData({ emailFlag: true });
  };
  const nameConstraints = (content) => {
    if (content.target.value === "") setEmailData({ nameFlag: false });
    //setta dinamicamente l'attivazione del bottone
    else setEmailData({ nameFlag: true });
  };
  const txtConstraints = (content) => {
    if (content.target.value === "") setEmailData({ txtFlag: false });
    //setta dinamicamente l'attivazione del bottone
    else setEmailData({ txtFlag: true });
  };

  return (
    <React.Fragment>
      <div>
        {emailData.testFlag === 1 ? (
          <CustomAlert Success={true} />
        ) : emailData.testFlag === -1 ? (
          <CustomAlert Success={false} />
        ) : null}
      </div>
      <Container>
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          id="name"
          onChange={nameConstraints}
        />
        <Input
          placeholder="Email"
          type="text"
          name="email"
          id="email"
          onChange={emailConstraints}
        />
        <Input
          placeholder="Oggetto"
          width="29vw"
          type="text"
          name="subject"
          id="subject"
        />
        <Text
          placeholder="Messaggio"
          name="message"
          id="message"
          width="29vw"
          rows="15"
          onChange={txtConstraints}
        ></Text>
        <Button variant="primary" onClick={sendEmail} target="_blank">
          &nbsp;Send E-mail
        </Button>
      </Container>
    </React.Fragment>
  );
};
