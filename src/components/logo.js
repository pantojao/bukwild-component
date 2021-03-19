import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from './logoIcon'
const Logo = () => {
  const [linkDisplay, setLinkDisplay] = useState(false);

  return (
    <div onMouseEnter={() => setLinkDisplay(true)} onMouseLeave={() => setLinkDisplay(false)}  style={{position: "relative"}} >
      <LogoIcon /> 
      
      {linkDisplay ? (
        <div className="navigation-links">
          <Link className="page-redirect" to="/industries">
            Industries
          </Link>
          <Link className="page-redirect" to="/services">
            Services
          </Link>
          <Link className="page-redirect" to="/about-us">
            About Us
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Logo;
