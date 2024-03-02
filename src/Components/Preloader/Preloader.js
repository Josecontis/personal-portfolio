import React from "react";
import "./Preloader.css";

function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"} />
      <div className="shape-blob-container">
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
        <div className="shape-blob three"></div>
        <div className="shape-blob four"></div>
        <div className="shape-blob five"></div>
        <div className="shape-blob six"></div>
      </div>
    </>
  );
}

export default Preloader;
