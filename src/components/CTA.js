import React from 'react'

const CTA = (props) => { 
    const content = props.content[0]
    const arrow = require('./arrow.JPG').default

    return (
        <div className="cta-banner">
            <p className="cta-text">{content.cta}</p>
            <div className="cta-redirect">
              <span>LET'S TALK.</span>
              <img src={arrow} alt="ty"/>
            </div>
        </div>
      
    )
}

export default CTA