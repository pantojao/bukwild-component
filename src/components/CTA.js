import React from 'react'


const CTA = (props) => { 
    const content = props.content[0]

    return (
        <div className="cta-banner">
            <p className="cta-text">{content.cta}</p>
        </div>
      
    )
}

export default CTA