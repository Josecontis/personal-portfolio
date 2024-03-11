import { t } from "i18next";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import bandb from "../../Assets/Projects/B&B.png";
import fmdEr from "../../Assets/Projects/FMDER.png";
import housePricePred from "../../Assets/Projects/housePricePred.png";
import thesis from "../../Assets/Projects/thesis.png";
import StarryBackground from "../../Components/Particles/StarryBackground";
import ProjectCard from "./ProjectCards";
import "./Projects.css";

export const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/projects")
      document.title = "Projects | Giuseppe Conticchio";
  }, [location]);

  return (
    <Container fluid className="project-section">
      <StarryBackground />
      <Container>
        <div className="project-heading-container">
          <div className="project-heading">
            <div className="project-heading-title">
              {t("projects.heading.title")}<b>{t("projects.tags.title")}</b>
            </div>
            <p style={{ color: "white" }}>
              {t("projects.heading.subtitle")}
            </p>
          </div>
          <div className="project-heading-view-all">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Josecontis?tab=repositories"
            >
              {t("projects.viewAll")}
            </a>
          </div>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fmdEr}
              isBlog={false}
              title={t("projects.projectCards.fmdEr.title")}
              description={
                <>
                  {t("projects.projectCards.fmdEr.description1")}
                  <br />
                  <br />
                  <b>{t("projects.tags.description1")}</b> {t("projects.projectCards.fmdEr.description2")} <br />
                  <br />
                  <b>{t("projects.tags.description2")}</b> {t("projects.projectCards.fmdEr.description3")}
                </>
              }
              link="https://github.com/Ocen5/FMD-ER"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={thesis}
              isBlog={false}
              title={t("projects.projectCards.thesis.title")}
              description={t("projects.projectCards.thesis.description")}
              link="https://github.com/Josecontis/opinion_target_extraction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bandb}
              isBlog={false}
              title={t("projects.projectCards.bandb.title")}
              description={t("projects.projectCards.bandb.description")}
              link="https://github.com/Josecontis/ilbelvedere"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={housePricePred}
              isBlog={false}
              title={t("projects.projectCards.housePricePred.title")}
              description={t("projects.projectCards.housePricePred.description")}
              link="https://github.com/Josecontis/House-Price-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
