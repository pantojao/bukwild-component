import React from 'react'
import Content from "./content";
import CTA from "./CTA";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const AllContent = (props) => {
    console.log(props)
    return (
    <>
       <TransitionGroup>
        <CSSTransition  key={props.content["title"]} timeout={5000} classNames="slide" >
            <div class="marquee-content" >
                <Content content={props.content} />
                <CTA content={props.content} />
            </div>
        </CSSTransition>
      </TransitionGroup>
    </>
    )
}


export default AllContent