import React, { useEffect, useState } from "react";
import AllContent from "./AllContent.js";

const MarqueeComponent = (props) => {
  const [contents, setContents] = useState(false);
  const [currentContent, setCurrentContent] = useState(false);
  
  useEffect(() => {
    setContents(props.content);
  }, []);

  useEffect(() => {
    if (contents){
      for (let content of contents) {
        if (content.slug == props.currentMarquee) {
          setCurrentContent(content);
          props.changeBackground(content.blocks[0].background);
          break;
        }
      }
    }
    if (!currentContent) {
      setCurrentContent(props.content[0]);
      props.changeBackground(props.content[0].blocks[0].background);
    }
  }, [props.currentMarquee]);

  return <>{currentContent ? <AllContent content={currentContent} /> : null}</>;
};

export default MarqueeComponent;
