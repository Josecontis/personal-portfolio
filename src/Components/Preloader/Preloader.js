import React from "react";
function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"} />
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <div class="shape-blob three"></div>
      <div class="shape-blob four"></div>
      <div class="shape-blob five"></div>
      <div class="shape-blob six"></div>
    </>
  );
}

export default Preloader;
