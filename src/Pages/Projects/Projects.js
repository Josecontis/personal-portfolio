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
              My Recent <strong className="purple">Works </strong>
            </div>
            <p style={{ color: "white" }}>
              Here are a few projects I&apos;ve worked on.
            </p>
          </div>
          <div className="project-heading-view-all">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Josecontis?tab=repositories"
            >
              View all
            </a>
          </div>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fmdEr}
              isBlog={false}
              title="FMD-ER"
              description={
                <>
                  Application developed for COVID-19 emergency at university
                  subdivided in two steps:
                  <br />
                  <br />
                  FACE MASK DETECTION: Analyzing the face of any individual to
                  verify the presence or absence of a surgical mask. <br />
                  <br />
                  EMOTION RECOGNITION: Recognizing the emotion of an individual,
                  regardless of the presence of a mask.
                </>
              }
              link="https://github.com/Ocen5/FMD-ER"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={thesis}
              isBlog={false}
              title="BACHELOR'S THESIS IN COMPUTER NETWORKS"
              description="Thesis in order to evaluate whether the dual propagation approach using rules is able to extract the direction of anger in software developers' comments."
              link="https://github.com/Josecontis/opinion_target_extraction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bandb}
              isBlog={false}
              title="B&B WEBSITE"
              description=" Website for B&B Il Belvedere, a charming bed and breakfast nestled in the picturesque town of Gravina in Puglia, Italy. The website is meticulously crafted with modern web technologies, including React.js, HTML, CSS, and JavaScript code, ensuring an elegant and user-friendly experience for visitors. "
              link="https://github.com/Josecontis/ilbelvedere"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={housePricePred}
              isBlog={false}
              title="HOUSE PRICE PREDICTION AND CLASSIFICATION"
              description="The project analyzed a dataset of housing information from Daegu, South Korea. Operations included data preprocessing, feature extraction, algorithm implementation for classification and regression, testing, evaluation metrics, hyperparameter optimization, and further testing of classifiers and regressors."
              link="https://github.com/Josecontis/House-Price-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
