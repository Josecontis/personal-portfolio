import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4">
          <div className="footer-copyright">
            Copyright © {year} <div className="footer-signature">GC</div>
          </div>
        </Col>
        <Col md="4" />
        <Col md="4">
          <div className="footer-copyright">
            Designed and Developed by
            <div className="footer-signature">Giuseppe Conticchio</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
