import React from 'react'
import img1 from '../img/video-object-05.png'
import img2 from '../img/video-object-03.png'
import img3 from '../img/video-object-07.png'
import img4 from '../img/video-object-09.png'
import img5 from '../img/video-object-08.png'
import img6 from '../img/video-object-04.png'
import img7 from '../img/video-object-06.png'
import img8 from '../img/video-object-01.png'
import img9 from '../img/video-object-02.png'
import img10 from '../img/video.png'

export const Decoration = () => {
    return (
        <div className="decoration grid">
            <div className="block__content">
                <h3 className="block__content-title">WHAT HAPPENED</h3>
                <p className="block__content-text decoration__content-text ">How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                <button className="btn--primary ">SEE MORE</button>
            </div>
            <div className="decoration__img">
                <img src={img1} alt="" className="decoration__img-01" />
                <img src={img2} alt="" className="decoration__img-02" />
                <img src={img3} alt="" className="decoration__img-03" />
                <img src={img4} alt="" className="decoration__img-04" />
                <img src={img5} alt="" className="decoration__img-05" />
                <img src={img6} alt="" className="decoration__img-06" />
                <img src={img7} alt="" className="decoration__img-07" />
                <img src={img8} alt="" className="decoration__img-08" />
                <img src={img9} alt="" className="decoration__img-09" />
                <img src={img10} alt="" className="decoration__img-10" />
            </div>
      </div>
    )
}
