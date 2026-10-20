import i18next from "i18next";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import StarryBackground from "../../Components/Particles/StarryBackground";
import { usePageTitle } from "../../hooks/usePageTitle";
import ProjectCard from "./ProjectCards";
import "./Projects.css";
import { projects } from "./projectsData";

export const Projects = () => {
  const { t } = useTranslation();
  usePageTitle("topBar.projects");

  return (
    <Container fluid className="project-section">
      <StarryBackground />
      <Container>
        <div className="project-heading-container">
          <div className="project-heading">
            {i18next.language === "it" ? (
              <div className="project-heading-title">
                <b>{t("projects.tags.title")}</b>
                {t("projects.heading.title")}
              </div>
            ) : (
              <div className="project-heading-title">
                {t("projects.heading.title")}
                <b>{t("projects.tags.title")}</b>
              </div>
            )}
            <p style={{ color: "white" }}>{t("projects.heading.subtitle")}</p>
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
          {projects.map(({ id, imgPath, link, description }) => (
            <Col md={6} className="project-card" key={id}>
              <ProjectCard
                imgPath={imgPath}
                isBlog={false}
                title={t(`projects.projectCards.${id}.title`)}
                description={description.map(({ tag, text }, index) => (
                  <Fragment key={text}>
                    {index > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {tag && (
                      <>
                        <b>{t(tag)}</b>{" "}
                      </>
                    )}
                    {t(`projects.projectCards.${id}.${text}`)}
                  </Fragment>
                ))}
                link={link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
