import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import StarryBackground from "../../Components/Particles/StarryBackground";
import SolarSystem from "../../Components/SolarSystem/SolarSystem";
import AlertNotification from "./Alert/AlertNotification";
import "./Contacts.css";

export const Contacts = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [testFlag, setTestFlag] = useState(0);
  const [validation, setValidation] = useState(false);
  const [rocketAnimation, setRocketAnimation] = useState(false);

  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location && location.pathname === "/contacts")
      document.title = `${t("topBar.contacts")} | Giuseppe Conticchio`;
  }, [location, t]);

  const sendEmail = () => {
    setRocketAnimation(true);
    if (name === "" || message === "" || email === "" || object === "") {
      setTestFlag(2);
    } else {
      emailjs
        .send(
          "service_dx9tuej",
          "template_yx44vvu",
          {
            from_name: name,
            to_name: "peppeco98@gmail.com",
            message: message,
            reply_to: email,
            object: object,
          },
          {
            publicKey: "VuXoRd7oWTeHQg9Ns",
          }
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
    }
  };

  const renderAlert = () => {
    if (!rocketAnimation && testFlag === 1) {
      return (
        <div className="alert-container">
          <AlertNotification type={"success"} />
        </div>
      );
    } else if (!rocketAnimation && testFlag === -1) {
      return (
        <div className="alert-container">
          <AlertNotification type={"error"} />
        </div>
      );
    } else if (!rocketAnimation && testFlag === 2) {
      return (
        <div className="alert-container">
          <AlertNotification type={"info"} />
        </div>
      );
    }
  };

  return (
    <Container fluid className="contact-section">
      <div className="contact-container">
        <StarryBackground />
        {renderAlert()}
        <div className="contact-title-container">
          <div className="contact-title">
            {t("contacts.keepContact1")}
            <b>{t("contacts.keepContact2")}</b> {t("contacts.keepContact3")}
          </div>
          <div className="form-contacts-container">
            <div>
              <div className="name-form">
                <label className="form-label">{t("contacts.name")}</label>
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
                  {t("contacts.email")}
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
                    e.target.value !== "" && setValidation(emailTest.test(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="subject-form">
              <label className="form-label">{t("contacts.object")}</label>
              <input
                autoComplete="off"
                id="subject"
                className="form-input"
                onChange={(e) => setObject(e.target.value)}
              />
            </div>
            <div className="message-form">
              <label className="form-label">{t("contacts.message")}</label>
              <textarea
                id="message"
                className="form-text-area"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              disabled={!validation && email !== ""}
              className="form-button"
              onClick={(e) => {
                sendEmail(e);
                setName("");
                setEmail("");
                setObject("");
                setMessage("");
              }}
            >
              {t("contacts.send")}
            </button>
          </div>
        </div>
        <SolarSystem />
        {rocketAnimation && (
          <div
            className="rocket"
            onAnimationEnd={() => setRocketAnimation(false)}
          >
            <div className="rocket-body">
              <div className="body"></div>
              <div className="fin fin-left"></div>
              <div className="fin fin-right"></div>
              <div className="window"></div>
            </div>
            <div className="exhaust-flame"></div>
          </div>
        )}
      </div>
    </Container>
  );
};
