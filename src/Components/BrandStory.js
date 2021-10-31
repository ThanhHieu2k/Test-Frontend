import React from 'react'
import img1 from '../img/object-01.png'
import img2 from '../img/object-06.png'
import img3 from '../img/object-07.png'
import img4 from '../img/object-02.png'
import img5 from '../img/object-03.png'
import img6 from '../img/object-04.png'
import img7 from '../img/object-05.png'
import img8 from '../img/window.png'

export const BrandStory = () => {
    return (
        <div className="brand  grid">
            <div className="brand__content">
                <h3 className="brand__content-title">BRAND STORY</h3>
                <p className="brand__content-text">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을  수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            </div>
            <div className="brand__left">
                <img src={img1} alt="" className="brand__left-img1" />
                <img src={img2} alt="" className="brand__left-img2" />
                <img src={img3} alt="" className="brand__left-img3" />
            </div>
            <div className="brand__right">
                <img src={img4} alt="" className="brand__right-img1" />
                <img src={img5} alt="" className="brand__right-img2" />
                <img src={img6} alt="" className="brand__right-img3" />
                <img src={img7} alt="" className="brand__right-img4" />
            </div>
            <div className="brand__highlight">
                <img src={img8} alt="" className="brand__highlight-img" />
                <div className="brand__highlight-content">
                    <h3 className="brand__highlight-title">What Happened’s Brand story</h3>
                    <p className="brand__highlight-description">청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                    봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                    긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                    아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
                    <button className="btn--primary brand__highlight-btn">SEE MORE</button>
                </div>
            </div>
      </div>
    )
}
