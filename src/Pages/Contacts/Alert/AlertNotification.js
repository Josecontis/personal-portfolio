import React from "react";
import "./AlertNotification.css";

export const AlertNotification = ({ Success }) => {
  return (
    <div className={Success ? "alert-success" : "alert-error"}>
      <span>{Success ? "success" : "error"} </span>
    </div>
  );
};
