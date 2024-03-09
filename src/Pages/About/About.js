import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import laptopImg from "../../Assets/Programmer-amico.svg";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./About.css";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

export const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/about")
      document.title = "About | Giuseppe Conticchio";
  }, [location]);

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
              Know Who <b>I am</b>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1>
          Professional <b>Skillset </b>
        </h1>
        <Techstack />
        <h1>
          <b>Tools</b> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
};
