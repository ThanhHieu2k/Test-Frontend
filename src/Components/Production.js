import React from 'react'
import { useState } from 'react';
import img1 from '../img/img-01.png'
import img2 from '../img/img-02.png'
import img3 from '../img/img-03.png'
import img4 from '../img/img-04.png'
import img5 from '../img/img-05.png'
import img6 from '../img/img-06.png'
import img7 from '../img/img-07.png'
import img8 from '../img/img-08.png'
import img9 from '../img/img-09.png'
import img10 from '../img/img-10.png'
import img11 from '../img/img-11.png'
import img12 from '../img/img-12.png'
import img13 from '../img/img-13.png'
import img14 from '../img/img-14.png'
import img15 from '../img/img-15.png'
import img16 from '../img/img-16.png'
import img17 from '../img/img-17.png'
import img18 from '../img/img-18.png'
import img19 from '../img/img-19.png'
import img20 from '../img/img-20.png'
import img21 from '../img/img-21.png'
import img22 from '../img/img-22.png'
import img23 from '../img/img-23.png'
import img24 from '../img/img-24.png'
import img25 from '../img/img-25.png'

export const Production = () => {
    let [isShow, setIsShow] = useState(false);
    let products = [
        { 
            name:'[what happen] How to create ',
            img: img1,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img2,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img3,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img:img4,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img5,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img6,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img7,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img8,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img9,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img10,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img11,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img12 ,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img13,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img14,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img15,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img16,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img17,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img18,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img19,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img20,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img21,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img22,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img23,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img24,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
        { 
            name:'[what happen] How to create ',
            img: img25,
            price: '2,500 won',
            rate: 250,
            icon: 'fas fa-heart product__item-rate-icon',
        },
    ]

    function seeMore(){
        setIsShow(!isShow);
    }

    function Item({item}){
        <a href className="product__item   grid__column-2-4">
            <img src={item.img} alt="product-1" className="product__item-img" />
            <p className="product__item-name">{item.name} </p>
            <div className="product__item-info">
                <span className="product__item--price">{item.price}</span>
                <span className="product__item-rate">
                    <i className="product__item-rate-icon " className={item.icon}  />
                    {item.rate}
                </span>
            </div>
        </a>
    }

    let productItems = products.map((value,index) =>{
        return(
            <a href className="product__item   grid__column-2-4">
                <img src={value.img} alt="product-1" className="product__item-img" />
                <p className="product__item-name">{value.name} </p>
                    <div className="product__item-info">
                    <span className="product__item--price">{value.price}</span>
                    <span className="product__item-rate">
                        <i className="product__item-rate-icon " className={value.icon}  />
                        {value.rate}
                    </span>
                </div>
            </a>
        )
    })

    return (
        <div className="product ">
            <div class="product__list  grid__row">
                {isShow ?[...productItems, ...productItems] : productItems }
            </div>
            <button onClick={seeMore} className=" btn product__view-btn">{!isShow ? 'VIEW MORE' : 'HIDE AWAY'}</button>
            
      </div>
    )

}
