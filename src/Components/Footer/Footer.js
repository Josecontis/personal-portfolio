import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Designed and Developed by <div className="footer-signature">Giuseppe Conticchio</div></h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} <div className="footer-signature">GC</div></h3>
        </Col>
        <Col md="4" className="footer-contact">
          <ul class="contacts-icons">
            <h3>
              <Link
                to="/contacts"
              >Have a question or want to work together?
              </Link>
            </h3>
            <li class="contacts-icons__block">
              <div class="contacts-icons__block-left">&#60;</div>
              <div class="contacts-icons__block-right">&#47;&#62;</div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
