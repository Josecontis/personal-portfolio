import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBlender,
  SiDocker,
  SiGit,
  SiMarkdown,
  SiMiro,
  SiNetlify,
  SiPostman,
  SiPycharm,
  SiSublimetext,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNetlify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBlender />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSublimetext />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMarkdown />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPycharm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMiro />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
