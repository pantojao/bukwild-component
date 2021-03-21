import React from "react";

//Renders call to action banner
const CTA = (props) => {
  const content = props.content["blocks"][0];
  const arrow = require("../assets/arrow.JPG").default;

  return (
    <div className="cta-banner">
      <p className="cta-text">{content.cta}</p>
      <div className="cta-redirect">
        <span>LET'S TALK.</span>
        <img src={arrow} alt="ty" />
      </div>
    </div>
  );
};

export default CTA;
