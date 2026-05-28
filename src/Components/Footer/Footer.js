import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center h-100">
        <Col xs="6" md="4">
          <div className="footer-copyright">
            Copyright © {year} <div className="footer-signature">GC</div>
          </div>
        </Col>
        <Col className="d-none d-md-block" md="4" />
        <Col xs="6" md="4">
          <div className="footer-copyright">
            {t("footer.drawnAndDeveloped")}
            <div className="footer-signature">Giuseppe Conticchio</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
