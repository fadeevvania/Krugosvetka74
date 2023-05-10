import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import OK from '../../img/OK.png';
import VK from '../../img/VK.png';
import './Header2.scss'
const Header2 = () => {
    return (
        <div className='Header2'>
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <div className="info">
                    <p>площадь Революции,г.Челябинск</p>
                    <div className="icons">
                        <a href="https://ok.ru" target='_blank'><img className='icon' src={OK} alt="" /></a>
                        <a href="https://vk.com/" target='_blank' ><img className='icon' src={VK} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="linkes">
                <div className="links">
                    <Link className='link' to="/routes">
                        <li>Маршруты</li>
                    </Link>
                    <Link className='link' to="/about">
                        <li>О нас</li>
                    </Link>
                    <Link className='link' to="/contacts">
                        <li>Контакты</li>
                    </Link>
                    <Link className='link' to="/basket">
                        <li>Корзина</li>
                    </Link>
                    <Link className='link' to="/favourite">
                        <li>Избранное</li>
                    </Link>
                    <Link className='link' to="/profile">
                        <li>Профиль</li>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header2