import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container h-full flex-col">
      <div id="loader" className="bg-primaryLightNavyBlue">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </div>
  );
};

export default Loader;
