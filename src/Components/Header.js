import React from 'react'
import logo from '../img/logo.png';
import { useState } from 'react';
export const Header = () => {

    let [isRespon, setRespon] = useState(false);
    function reSpon(){
        setRespon(!isRespon)
    }

    return (
        <header className="header grid">
            <img src={logo} alt="logo website" className="header__logo" />
            <ul className="header__navbar" style={isRespon?{display: 'none'}:{display: 'block'}}>
                <li className="navbar__item" >
                    <a href className="navbar__item-link">INTRODUCTION</a>
                </li>
                <li className="navbar__item">
                    <a href className="navbar__item-link">SOLUTION</a>
                </li>
                <li className="navbar__item">
                    <a href className="navbar__item-link">RATE PLAN</a>
                </li>
                <li className="navbar__item">
                    <a href className="navbar__item-link">LOGIN</a>
                </li>
                <li className="navbar__item">
                    <a href className="navbar__item-link">APPLY FOR FREE USE</a>
                </li>   
            </ul>
            <i onClick ={reSpon} className="fas fa-bars header__icon-menu" />
      </header>
    )
}
