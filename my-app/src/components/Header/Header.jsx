import React from 'react'
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
                   <div className="icc">
                   <p>площадь Революции,г.Челябинск</p>
                    </div> 
                    <div className="icons">
                        <img className='icon' src={OK} alt="" />
                        <img className='icon' src={VK} alt="" />
                    </div>
                </div>
            </div>
            <div className="links">
                <Link className='link' to="">
                    <h5>Маршруты</h5>
                </Link>
                <Link className='link' to="">
                    <h5>О нас</h5>
                </Link>
                <Link className='link' to="">
                    <h5>Контакты</h5>
                </Link>
                <Link className='link' to="">
                    <h5>Корзина</h5>
                </Link>
                <Link className='link' to="">
                    <h5>Избранное</h5>
                </Link>
                <Link className='link' to="">
                    <h5>Профиль</h5>
                </Link>
            </div>
        </div>
    )
}

export default Header