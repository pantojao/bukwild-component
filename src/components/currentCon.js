import React, { useEffect, useState } from "react";
import AllContent from "./AllContent.js";

// 1) This component controls the logic that will determine the
// the current page
// 2) Content data is then passed to the children that render

const CurrentContent = (props) => {
  const [contents, setContents] = useState(false);
  const [currentContent, setCurrentContent] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(false);

  useEffect(() => {
    setContents(props.content);
  }, []);

  useEffect(() => {
    if (contents) {
      for (let content of contents) {
        if (content.slug == props.currentMarquee) {
          setCurrentContent(content);
          setCurrentBackground(content.blocks[0].background);
          break;
        }
      }
    }
    if (!currentContent) {
      setCurrentContent(props.content[0]);
      setCurrentBackground(props.content[0].blocks[0].background);
    }
  }, [props.currentMarquee]);

  return (
    <>
      {currentContent ? (
        <AllContent content={currentContent} background={currentBackground} />
      ) : null}
    </>
  );
};

export default CurrentContent;
