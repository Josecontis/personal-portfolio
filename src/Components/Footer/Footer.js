import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const navigate = useNavigate();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>
            Designed and Developed by{" "}
            <div className="footer-signature">Giuseppe Conticchio</div>
          </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>
            Copyright © {year} <div className="footer-signature">GC</div>
          </h3>
        </Col>
        <Col md="4" className="footer-contact">
          <ul className="contacts-icons">
            <h3>
              <div onClick={() => navigate("/contacts")}>
                Have a question or want to work together?
              </div>
            </h3>
            <li className="contacts-icons__block">
              <div className="contacts-icons__block-left">&#60;</div>
              <div className="contacts-icons__block-right">&#47;&#62;</div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
