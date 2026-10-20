import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Stack.css";

// Icon tile of the About page: the name shows in a tooltip on mouse over or keyboard focus
function TechIcon({ icon, name }) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tech-tooltip-${name}`}>{name}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons" tabIndex={0} aria-label={name}>
        {icon}
      </Col>
    </OverlayTrigger>
  );
}

TechIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechIcon;
