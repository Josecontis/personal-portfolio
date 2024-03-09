import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./Resume.css";
import Resumecontent from "./ResumeContent";

export const Resume = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/resume")
      document.title = "Resume | Giuseppe Conticchio";
  }, [location]);

  return (
    <Container fluid className="resume-section">
      <StarryBackground />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/file/d/1G8Pm46hPBEIWhq2oPSshQxTIS4gdk6ew/view?usp=sharing"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="E-commerce - BIOLAND"
              date="June 2016 - September 2018"
              content={[
                "Creating Listings on E-Commerce Sites",
                "E-commerce website management ww.puladifarro.com",
                "Database development for spelt husks site",
                "Newsletter for spelt husk products, using mozilla thunderbird and its plug-ins",
              ]}
            />
            <Resumecontent
              title="Full-stack developer - MACNIL"
              date="March 2021 - Today"
              content={[
                "Software development team that adopts the AGILE methodology for the design and development of web and mobile applications in the IoT (Internet of Things), Automotive, Fleet Management.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="English Course - Cambridge B2"
              content={[
                "This course offers a comprehensive and structured approach to improving English proficiency at the upper-intermediate level.",
              ]}
            />
            <Resumecontent
              title="Phone and PC repairs"
              content={[
                "Software repair and replacement of hardware components on mobile phones and computers.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IHigh School Diploma in Computer Science - Galieo Galilei, Altamura "
              date="September 2012 - June 2018"
              content={[`Vote 80/100`]}
            />
            <Resumecontent
              title="Bachelor's degree in computer science - University of Bari Aldo Moro"
              date="October 2018 - March 2021"
              content={["Vote 105/110"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "B2 English Certificate",
                "Certificate of participation in the course for safety and protection of workers' health",
                "Specific training course - low risk",
                "Certificate of attendance of the school-work alternation course",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/file/d/1G8Pm46hPBEIWhq2oPSshQxTIS4gdk6ew/view?usp=sharing"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};
