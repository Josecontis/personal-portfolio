import PropTypes from "prop-types";
import React from "react";
import "./Preloader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} />
  );
}

Preloader.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Preloader;
