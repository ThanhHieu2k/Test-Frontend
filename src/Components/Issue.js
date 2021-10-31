import React from 'react'
import img1 from '../img/news-object-03.png'
import img2 from '../img/news-object-02.png'
import img3 from '../img/news-img-01.png'
import img4 from '../img/new-img-02.png'
import img5 from '../img/news-img-03.png'
import img6 from '../img/news-img-04.png'
import img7 from '../img/news-img-05.png'
import img8 from '../img/decor1.png'
import img9 from '../img/news-object-05.png'
import img10 from '../img/news-object-04.png'


export const Issue = () => {
    return (
        <div className="issue grid">
            <div className="block__content">
                <h3 className="block__content-title">HAPPENED'S ISSUE</h3>
                <p className="block__content-text">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                <button className="btn--primary issue-btn">SEE MORE</button>
            </div>
            <div className="issue__decor">
                <img src={img1} alt="" className="issue__decor-img1" />
                <img src={img2} alt="" className="issue__decor-img2" />
            </div>
            <div className="issue__list grid__row">
                <div className="issue__arrow grid__column-2-4">
                    <span className="issue__arrow-text">WHPN ISSUE</span>
                    <img src={img3} alt="" className="issue__arrow-img" />
                </div>
                <div className="issue__item grid__column-2-4">
                    <div className="issue__item-header">B BRAND</div>
                    <img src={img4} alt="" className="issue__item-img" />
                </div>
                <div className="issue__item grid__column-2-4">
                    <div className="issue__item-header">C BRAND</div>
                    <img src={img5} alt="" className="issue__item-img" />
                </div>
                <div className="issue__item grid__column-2-4">
                    <div className="issue__item-header" style={{backgroundColor: '#ff5500'}}>D BRAND</div>
                    <img src={img6} alt="" className="issue__item-img" />
                </div>
                <div className="issue__item grid__column-2-4">
                    <div className="issue__item-header">E BRAND</div>
                    <img src={img7} alt="" className="issue__item-img" />
                </div>
            </div>
            <div className="issue__icon">
                <img src={img8} alt="" className="issue__icon-1" />
                <img src={img9} alt="" className="issue__icon-2" />
                <img src={img10} alt="" className="issue__icon-3" />
            </div>
      </div>
    )
}
