import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import './Header.scss'
const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
              <Link to="/"><img src={Logo} alt="" /></Link>  
                <p>площадь Революции,г.Челябинск</p>
                <div className="icons">
                    <p>1</p>
                    <p>2</p>
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