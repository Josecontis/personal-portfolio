import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import StarryBackground from "../../Components/Particles/StarryBackground";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Resume.css";
import Resumecontent from "./ResumeContent";

export const Resume = () => {
  const { t, i18n } = useTranslation();
  usePageTitle("topBar.resume");

  const resumeLinks = {
    it: "https://drive.google.com/file/d/11APJUHOhYrlkzV8y7ruZU1eJarsM6V2j/view?usp=sharing",
    en: "https://drive.google.com/file/d/1lqyWowOpRn-TKHkrHK-em-x2MhJRQaHz/view?usp=sharing"
  };

  const currentLang = i18n.language;

  return (
    <Container fluid className="resume-section">
      <StarryBackground />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLinks[currentLang] || resumeLinks.it}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;{t("resume.download")}
          </Button>
        </Row>

        {/* 🔹 Contenuto */}
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">{t("resume.experience.title")}</h3>

            <Resumecontent
              title={t("resume.experience.entries.title2")}
              date={t("resume.experience.entries.date2")}
              content={[t("resume.experience.entries.content2")]}
            />
            <Resumecontent
              title={t("resume.experience.entries.title1")}
              date={t("resume.experience.entries.date1")}
              content={[t("resume.experience.entries.content1")]}
            />
            <Resumecontent
              title={t("resume.experience.entries.title3")}
              date={t("resume.experience.entries.date3")}
              content={[t("resume.experience.entries.content3")]}
            />
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
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">{t("resume.education.title")}</h3>
            <Resumecontent
              title={t("resume.education.entries.title1")}
              date={t("resume.education.entries.date1")}
              content={[t("resume.education.entries.content1")]}
            />
            <Resumecontent
              title={t("resume.education.entries.title")}
              date={t("resume.education.entries.date")}
              content={[t("resume.education.entries.content")]}
            />

            <h3 className="resume-title">{t("resume.achievements.title")}</h3>
            <Resumecontent
              content={[
                t("resume.achievements.entries.content.list"),
              ]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLinks[currentLang] || resumeLinks.it}
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
