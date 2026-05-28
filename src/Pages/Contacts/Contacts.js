import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import StarryBackground from "../../Components/Particles/StarryBackground";
import SolarSystem from "../../Components/SolarSystem/SolarSystem";
import { usePageTitle } from "../../hooks/usePageTitle";
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

  const { t } = useTranslation();
  usePageTitle("topBar.contacts");

  const sendEmail = () => {
    if (name === "" || message === "" || email === "" || object === "") {
      setTestFlag(2);
      return;
    }
    setRocketAnimation(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          message: message,
          reply_to: email,
          object: object,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        function (response) {
          setTestFlag(1);
        },
        function (error) {
          setTestFlag(-1);
        },
      );
  };

  const renderAlert = () => {
    if (testFlag === 0 || rocketAnimation) return null;
    const type =
      testFlag === 1 ? "success" : testFlag === -1 ? "error" : "info";
    return (
      <div className="alert-container">
        <AlertNotification type={type} />
      </div>
    );
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
            <div className="name-email-row">
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
                      "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})",
                    );
                    e.target.value !== "" &&
                      setValidation(emailTest.test(e.target.value));
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
                setValidation(false);
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
