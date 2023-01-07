import React from "react";
function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"} />
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="shape-blob four"></div>
      <div className="shape-blob five"></div>
      <div className="shape-blob six"></div>
    </>
  );
}

export default Preloader;
