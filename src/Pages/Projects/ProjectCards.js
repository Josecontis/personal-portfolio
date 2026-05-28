import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Button variant="primary" href={props.link} target="_blank">
        <BiLinkExternal /> &nbsp;
        {props.isBlog ? t("projects.viewBlog") : t("projects.viewProject")}
      </Button>
    </Card>
  );
}

ProjectCards.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isBlog: PropTypes.bool.isRequired,
};

export default ProjectCards;
