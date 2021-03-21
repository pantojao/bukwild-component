import React from "react";
import TextContent from "./textContent";
import CTA from "./CTA";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// 1) This component handles the logic for all the dynamic rendering
// 2) Utilizes react transition group to make slide animation
// 3) I was not sure how the marquee component should
//    animate so I created this variation

const AllContent = (props) => {
  const background = require(`../assets/backgrounds/${props.background}`)
    .default;

  return (
    <>
      <TransitionGroup appear={true}>
        <CSSTransition
          key={props.content["title"]}
          timeout={2000}
          classNames="slide"
        >
          <div
            className="all-content"
            style={{ backgroundImage: `url("${background}")` }}
          >
            <div class="marquee-content">
              <TextContent content={props.content} />
              <CTA content={props.content} />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default AllContent;
