import PropTypes from "prop-types";
import React from "react";
import "./AlertNotification.css";

function AlertNotification(props) {
  return (
    <div className={props.Success ? "alert-success" : "alert-error"}>
      <span>{props.Success ? "success" : "error"} </span>
    </div>
  );
}
AlertNotification.propTypes = {
  Success: PropTypes.bool.isRequired,
};

export default AlertNotification;
