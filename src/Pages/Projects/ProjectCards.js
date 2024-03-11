import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
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
        {props.isBlog ? "View Blog" : "View Project"}
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
