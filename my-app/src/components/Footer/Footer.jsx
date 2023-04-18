import React from 'react'
import Logo from '../../img/LogoFooter.png'
import './Footer.scss'
import { Link } from 'react-router-dom'
import OK from '../../img/OK.png'
import VK from '../../img/VK.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <Link className='link' to="/">
          <li>Маршруты</li>
        </Link>
        <div className="">
          <Link className='link' to="/">
            <li>О нас</li>
          </Link><Link className='link' to="/">
            <li>Статьи</li>
          </Link><Link className='link' to="/">
            <li>Контакты</li>
          </Link>
        </div>
        <div className="">
          <Link className='link' to="/">
            <li>Профиль</li>
          </Link>
          <Link className='link' to="/">
            <li>Корзина</li>
          </Link>
          <Link className='link' to="/">
            <li>Избранное</li>
          </Link>
        </div>
        <div className="icons">
          <img className='icon' src={OK} alt="" />
          <img className='icon' src={VK} alt="" />
          <img className='icon' src={VK} alt="" />          
        </div>
      </div>
    </div>
  )
}

export default Footer