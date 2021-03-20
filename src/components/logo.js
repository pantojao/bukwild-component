import React, { useState } from "react";
import LogoIcon from "./logoIcon";

const Logo = (props) => {
  const [linkDisplay, setLinkDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(false)

  const changePage = (page) => { 
    props.changeMarquee(page)
    console.log(page)
  }

  return (
    <div
      onMouseEnter={() => setLinkDisplay(true)}
      onMouseLeave={() => setLinkDisplay(false)}
      style={{ position: "relative" }}
    >
      <LogoIcon />

      {linkDisplay ? (
        <div className="navigation-links">
          <span className="page-redirect" onClick={() => changePage("industries")}>
            Industries
          </span>

          <span className="page-redirect" onClick ={() => changePage("services")}>
            Services
          </span>
          <span className="page-redirect" onClick = {() => changePage("about-us")}>
            About Us
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Logo;
