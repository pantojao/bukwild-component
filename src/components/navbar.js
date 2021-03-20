import React from "react";
import Logo from "./logo";

const Navbar = (props) => {
  return (
    <nav>
      <Logo changeMarquee={(current) => props.changeMarquee(current)}/>
      <button class="contact-btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
