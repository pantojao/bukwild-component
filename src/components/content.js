import React, { useEffect, useState } from "react";

const Content = (props) => {
  const [content, setContent] = useState(false)
  
  useEffect(() => { 
    setContent(props.content["blocks"][0])
  }, [props])

  return (
    content ? 
    <div className="content">
        <h1 className="headline">{content.headline}</h1>
      <div class="main-text">
        <p className="subheader">{content.subhead}</p>
      </div>
    </div> : null
  );
};

export default Content;
