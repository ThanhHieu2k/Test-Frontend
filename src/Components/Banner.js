import React from 'react'
import img from '../img/main-banner.png'


export const Banner = () => {
    return (
        <div className="grid  main-banner">
            <img className="banner-img" src={img} alt="main-banner" />
        </div>
    )
}
