import { t } from "i18next";
import PropTypes from "prop-types";
import React from "react";
import "./AlertNotification.css";

function AlertNotification(props) {
  return (
    <div className={`alert-${props.type}`}>
      <span>{t(`alert.${props.type}`)}</span>
    </div>
  );
}
AlertNotification.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AlertNotification;
