import React from "react";
import "./loader.css";

const Loader = () => {
  let bgClass = "";
  let hillColor = "#011627"; // Default color

  if (typeof window === "undefined") {
    bgClass = "bg-primaryLightNavyBlue";
  } else {
    const screenWidth = window.innerWidth;

    bgClass = screenWidth < 768 ? "bg-baseColor" : "bg-primaryLightNavyBlue";
    hillColor = screenWidth < 768 ? "#SomeColorForSmallScreen" : "#011627";
  }

  return (
    <div className="loader-container h-full flex-col">
      <div id="loader" className={bgClass}>
        <div id="box"></div>
        <div id="hill" style={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: hillColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
