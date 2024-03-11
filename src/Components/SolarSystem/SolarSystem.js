import React from "react";
import "./SolarSystem.css";

function SolarSystem() {
  return (
    <>
      <div className="solar-system">
        <div id="sun"></div>

        {/* Mercury */}
        <div className="orbit mercury-orbit"></div>
        <div className="mercury-spin">
          <div id="mercury"></div>
        </div>

        {/* Venus */}
        <div className="orbit venus-orbit"></div>
        <div className="venus-spin">
          <div id="venus"></div>
        </div>

        {/* Earth */}
        <div className="orbit earth-orbit"></div>
        <div className="earth-spin">
          <div className="orbit moon-orbit"></div>
          <div className="moon-spin">
            <div id="moon"></div>
          </div>
          <img
            id="earth"
            alt="earth"
            src="https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg"
          />
        </div>

        {/* Mars */}
        <div className="orbit mars-orbit"></div>
        <div className="mars-spin">
          <div id="mars"></div>
        </div>

        {/* Jupiter */}
        <div className="orbit jupiter-orbit"></div>
        <div className="jupiter-spin">
          <div id="jupiter"></div>
        </div>

        {/* Saturn */}
        <div className="orbit saturn-orbit"></div>
        <div className="saturn-spin">
          <div id="saturn">
            <div className="saturn-ring"></div>
          </div>
        </div>

        {/* Uranus */}
        <div className="orbit uranus-orbit"></div>
        <div className="uranus-spin">
          <div id="uranus"></div>
        </div>

        {/* Neptune */}
        <div className="orbit neptune-orbit"></div>
        <div className="neptune-spin">
          <div id="neptune"></div>
        </div>
      </div>
    </>
  );
}

export default SolarSystem;
