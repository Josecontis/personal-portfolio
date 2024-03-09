import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import StarryBackground from "../../Components/Particles/StarryBackground";
import SolarSystem from "../../SolarSystem/SolarSystem";
import AlertNotification from "./Alert/AlertNotification";
import "./Contacts.css";

export const Contacts = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [testFlag, setTestFlag] = useState(0);
  const [validation, setValidation] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/contacts")
      document.title = "Contacts | Giuseppe Conticchio";
  }, [location]);

  const sendEmail = () => {
    let templateParams = {
      from_name: name,
      subject: object,
      to_name: "peppeco98@gmail.com",
      message_html: message,
      from_email: email,
      reply_to: email,
    };

    emailjs
      .send(
        "service_71tircc",
        "template_7iyx15d",
        templateParams,
        "YRrKkrPNpgyEoqK3o"
      )
      .then(
        function (response) {
          setTestFlag(1);
          renderAlert();
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setTestFlag(-1);
          renderAlert();
          console.log("FAILED...", error);
        }
      );
  };

  const renderAlert = () => {
    if (testFlag === 1) {
      return (
        <div className="alert-container">
          <AlertNotification Success={true} />
        </div>
      );
    } else if (testFlag === -1) {
      return (
        <div className="alert-container">
          <AlertNotification Success={false} />
        </div>
      );
    }
  };

  return (
    <Container fluid className="contact-section">
      <div className="contact-container">
        <StarryBackground />
        <div className="contact-title-container">
          <div className="contact-title">
            Keep in <b>contact</b> with me
          </div>
          <div className="form-contacts-container">
            {renderAlert()}
            <div>
              <div className="name-form">
                <label className="form-label">Name</label>
                <input
                  autoComplete="off"
                  id="name"
                  className="form-input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="email-form">
                <label
                  className={
                    !validation && email !== ""
                      ? "form-label-error"
                      : "form-label"
                  }
                >
                  E-Mail
                </label>
                <input
                  autoComplete="off"
                  id="email"
                  className={
                    email === "" || validation
                      ? "form-input"
                      : "form-input-error"
                  }
                  onChange={(e) => {
                    setEmail(e.target.value);
                    let emailTest = new RegExp(
                      "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})"
                    );
                    email !== "" && setValidation(emailTest.test(email));
                  }}
                />
              </div>
            </div>
            <div className="subject-form">
              <label className="form-label">Object</label>
              <input
                autoComplete="off"
                id="subject"
                className="form-input"
                onChange={(e) => setObject(e.target.value)}
              />
            </div>
            <div className="message-form">
              <label className="form-label">Message</label>
              <textarea
                id="message"
                className="form-text-area"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className={
                name && email && object && message && validation
                  ? "form-button"
                  : "form-button-disabled"
              }
              onClick={(e) => {
                name &&
                  email &&
                  object &&
                  message &&
                  validation &&
                  sendEmail(e);
                setName("");
                setEmail("");
                setObject("");
                setMessage("");
              }}
            >
              SEND
            </button>
          </div>
        </div>
        <SolarSystem />
      </div>
    </Container>
  );
};
