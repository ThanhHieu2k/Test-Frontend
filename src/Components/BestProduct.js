import React from 'react'
import img1 from '../img/producticon-01.png'
import img2 from '../img/producticon-02.png'
import img3 from '../img/producticon-03.png'
import img4 from '../img/best-image-01.png'
import img5 from '../img/best-image-02.png'
import img6 from '../img/best-image-03.png'


export const BestProduct = () => {
    return (
        <div className="best-product grid ">
            <p className="best-product__title">Best Product</p>
            <p className="best-product__description">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first </p>
            <div className="best-product__product-list grid__row">
                <div className="grid__column-4 best-product__item">
                    <img src={img1} alt="" className="best-product__item-icon" />
                    <img src={img4} alt="" className="best-product__item-img" />
                    <div className="best-product__item-content">
                        <p className="best-product__item-text">How to create mobile-optimized</p>
                        <span className="best-product__item-go">GO</span>
                    </div>
                </div>
                <div className="grid__column-4 best-product__item">
                    <img src={img2} alt="" className="best-product__item-icon" />
                    <img src={img5} alt="" className="best-product__item-img" />
                    <div className="best-product__item-content">
                        <p className="best-product__item-text">How to create mobile-optimized</p>
                        <span className="best-product__item-go">GO</span>
                    </div>
                </div>
                <div className="grid__column-4 best-product__item">
                    <img src={img3} alt="" className="best-product__item-icon" />
                    <img src={img6} alt="" className="best-product__item-img" />
                    <div className="best-product__item-content">
                        <p className="best-product__item-text">How to create mobile-optimized</p>
                        <span className="best-product__item-go">GO</span>
                    </div>
                </div>
            </div>
      </div>
    )
}
