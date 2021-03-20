import React, { useEffect, useState } from "react";
import Content from "./content";
import CTA from "./CTA";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AllContent = (props) => {
  const background = require(`../assets/backgrounds/${props.background}`)
    .default;

  return (
    <>
      <TransitionGroup appear={true}>
        <CSSTransition key={props.content["title"]} timeout={2000} classNames="slide">
          <div className="all-content"  style={{ backgroundImage: `url("${background}")` }}>
            <div class="marquee-content">
              <Content content={props.content} />
              <CTA content={props.content} />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default AllContent;
