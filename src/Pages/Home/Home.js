import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import homeLogo from "../../Assets/Programming-amico.svg";
import myImg from "../../Assets/avatar.svg";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./Home.css";
import Type from "./Tools/Type";

export const Home = () => {
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    if (location && location.pathname === "/")
      document.title = `${t("topBar.home")} | Giuseppe Conticchio`;
  }, [location, t]);

  return (
    <section>
      <StarryBackground />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home.hiThere")}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t("home.iam")}
                <strong className="main-name"> CONTICCHIO GIUSEPPE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>{t("home.introduceMyself")}</h1>
              <p className="home-about-body">
                {t("home.programmingLove")}
                <br />
                <br />
                {t("home.fluentIn")}
                <i>
                  <b>{t("home.tags.fluentIn")}</b>
                </i>
                <br />
                <br />
                {t("home.fieldOfInterestsPart1")}
                <i>
                  <b>{t("home.tags.webTechnologiesAndProducts")}</b>
                  {t("home.fieldOfInterestsPart2")}
                  <b>{t("home.tags.deepLearningAndNLP")}</b>
                </i>
                <br />
                <br />
                {t("home.passionForDevelopingPart1")}
                <b>{t("home.tags.nodeJs")}</b>{" "}
                {t("home.passionForDevelopingPart2")}
                <i>
                  <b>{t("home.tags.modernJSFrameworks")}</b>
                </i>
                {t("home.passionForDevelopingPart3")}
                <i>
                  <b>{t("home.tags.reactAndNextJs")}</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <div className="hover14 column">
                <figure>
                  <img src={myImg} alt="avatar" />
                </figure>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>{t("home.findMe")}</h1>
              <p>
                {t("home.connectWithMe")} <b>{t("home.tags.connectWithMe")}</b>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Josecontis"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/giuseppe-conticchio-01a414159/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/giuseppe.conticchio/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
