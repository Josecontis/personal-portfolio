import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./Resume.css";
import Resumecontent from "./ResumeContent";

export const Resume = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location && location.pathname === "/resume")
      document.title = `${t("topBar.resume")} | Giuseppe Conticchio`;
  }, [location, t]);

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
            &nbsp;{t("resume.download")}
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">{t("resume.experience.title")}</h3>
            <Resumecontent
              title={t("resume.experience.entries.title")}
              date={t("resume.experience.entries.date")}
              content={[
                t("resume.experience.entries.content.list"),
                t("resume.experience.entries.content.list1"),
                t("resume.experience.entries.content.list2"),
                t("resume.experience.entries.content.list3"),
              ]}
            />
            <Resumecontent
              title={t("resume.experience.entries.title1")}
              date={t("resume.experience.entries.date1")}
              content={[t("resume.experience.entries.content1")]}
            />
            <h3 className="resume-title">
              {t("resume.extracurricular.title")}
            </h3>
            <Resumecontent
              title={t("resume.extracurricular.entries.title")}
              content={[t("resume.extracurricular.entries.content")]}
            />
            <Resumecontent
              title={t("resume.extracurricular.entries.title1")}
              content={[t("resume.extracurricular.entries.content1")]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">{t("resume.education.title")}</h3>
            <Resumecontent
              title={t("resume.education.entries.title")}
              date={t("resume.education.entries.date")}
              content={[t("resume.education.entries.content")]}
            />
            <Resumecontent
              title={t("resume.education.entries.title1")}
              date={t("resume.education.entries.date1")}
              content={[t("resume.education.entries.content1")]}
            />
            <h3 className="resume-title">{t("resume.achievements.title")}</h3>
            <Resumecontent
              content={[
                t("resume.achievements.entries.content.list"),
                t("resume.achievements.entries.content.list1"),
                t("resume.achievements.entries.content.list2"),
                t("resume.achievements.entries.content.list3"),
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
            &nbsp;{t("resume.download")}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};
