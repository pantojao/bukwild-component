import React, { useEffect, useState } from 'react'
import Content from "./content";
import CTA from "./CTA";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const AllContent = (props) => {
    const [entering, setEntering] = useState(true)
    const [exiting, setExiting] = useState(true)

    const background = require(`../assets/backgrounds/${props.background}`).default;
        // setCurrentBackground();
    
    return (
    entering ? 
    <div className="all-content" style={{backgroundImage: `url("${background}")`}}>
       <TransitionGroup appear={true}>
        <CSSTransition  key={props.content["title"]} enter={entering} exit={exiting} timeout={5000} classNames="slide" >
            <div class="marquee-content" >
                <Content content={props.content} />
                <CTA content={props.content} />
            </div>
        </CSSTransition>
      </TransitionGroup>
    </div> : null
    )
}


export default AllContent 