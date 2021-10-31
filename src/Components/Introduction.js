import React from 'react'
import img from '../img/introduction-bg.png'

export const Introduction = () => {
    return (
        <div className="grid introduction" id="introduction">
            <img src={img} alt="introduction-img" className="introduction__img" />
            <div className="introduction__text">
                <h2>WHAT HAPPENED</h2>
                <span>How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first <p /> 
                    step to your brand's success. How to create <p /> mobile-optimized  in minutes.  
                </span>
            </div>
      </div>
    )
}
