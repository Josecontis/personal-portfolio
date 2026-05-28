import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.title")}
            <b> Conticchio Giuseppe </b>
            {t("about.place")}
            <br />
            {t("about.description")} <b>{t("about.role")}</b>.
            {t("about.description1")}
            <br />
            <br />
            {t("about.description2")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; {t("about.hobby")}
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; {t("about.hobby1")}
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; {t("about.hobby2")}
            </li>
          </ul>

          <p className="about-phrase">
            <b>&quot;{t("about.phrase")}&quot;</b>
          </p>
          <footer className="blockquote-footer">Giuseppe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
