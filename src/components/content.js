import React from "react";

const Content = (props) => {
  const content = props.content[0];

  return (
    <div className="content">
      <h1 className="headline">{content.headline}</h1>
      <div class="main-text">
        <p className="subheader">{content.subhead}</p>
      </div>
    </div>
  );
};

export default Content;
