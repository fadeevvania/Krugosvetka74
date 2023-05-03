import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import OK from '../../img/OK.png';
import VK from '../../img/VK.png';

import './Header.scss'
const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className="info">
                   <p>площадь Революции,г.Челябинск</p>
                    <div className="icons">
                    <a href="https://ok.ru" target='_blank'><img className='icon' src={OK} alt="" /></a>
                    <a href="https://vk.com/"  target='_blank' ><img className='icon' src={VK} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="linkes">
            <div className="links">
                <Link className='link' to="">
                    <li>Маршруты</li>
                </Link>
                <Link className='link' to="">
                    <li>О нас</li>
                </Link>
                <Link className='link' to="">
                    <li>Контакты</li>
                </Link>
                <Link className='link' to="">
                    <li>Корзина</li>
                </Link>
                <Link className='link' to="">
                    <li>Избранное</li>
                </Link>
                <Link className='link' to="">
                    <li>Профиль</li>
                </Link>
            </div>
            </div>
          
        </div>
    )
}

export default Header