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
          <h5>Маршруты</h5>
        </Link>
        <div className="">
          <Link className='link' to="/">
            <h5>О нас</h5>
          </Link><Link className='link' to="/">
            <h5>Статьи</h5>
          </Link><Link className='link' to="/">
            <h5>Контакты</h5>
          </Link>
        </div>
        <div className="">
          <Link className='link' to="/">
            <h5>Профиль</h5>
          </Link>
          <Link className='link' to="/">
            <h5>Корзина</h5>
          </Link>
          <Link className='link' to="/">
            <h5>Избранное</h5>
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