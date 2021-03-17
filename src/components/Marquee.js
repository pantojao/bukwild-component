import React, { useEffect, useState } from "react";
import Content from "./content";
import CTA from "./CTA";
import { useLocation } from "react-router-dom";


const Marquee = (props) => {
  const [currentContent, setCurrentContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/");
    const slug = path[path.length - 1];
    for (let content of props.content) {
      if (content.slug == slug) {
        setCurrentContent(content.blocks);
        document.body.style.backgroundImage = content.blocks.backgroundImage
        break;
      }
    }
  }, [location]);

  return (
    <>
      {currentContent ? (
        <div>
          <Content content={currentContent} />
          <CTA content={currentContent} />
        </div>
      ) : null}
    </>
  );
};

export default Marquee;
