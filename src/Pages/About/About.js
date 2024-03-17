import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import laptopImg from "../../Assets/Programmer-amico.svg";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./About.css";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

export const About = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location && location.pathname === "/about")
      document.title = `${t("topBar.about")} | Giuseppe Conticchio`;
  }, [location, t]);

  return (
    <Container fluid className="about-section">
      <StarryBackground />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("about.pre")} <b> {t("about.tags.pre1")}</b>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{ marginLeft: "12px" }}>
          {t("about.section")} <b>{t("about.tags.skillset")} </b>
        </h1>
        <Techstack />
        <h1 style={{ marginLeft: "12px" }}>
          <b> {t("about.section1")}</b> {t("about.tags.use")}
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
};
