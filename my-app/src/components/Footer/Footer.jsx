import React from 'react'
import Logo from '../../img/LogoFooter.png'
import './Footer.scss'
import { Link } from 'react-router-dom'
import OK from '../../img/OK.png'
import VK from '../../img/VK.png'
import TG from '../../img/TG.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="Logo">
        <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <Link className='link' to="/routes">
          <li>Маршруты</li>
        </Link>
        <div className="">
          <Link className='link' to="/about">
            <li>О нас</li>
          </Link>
          <Link className='link' to="/article">
            <li>Статьи</li>
          </Link>
          <Link className='link' to="/contacts">
            <li>Контакты</li>
          </Link>
        </div>
        <div className="">
          <Link className='link' to="/profile">
            <li>Профиль</li>
          </Link>
          <Link className='link' to="/basket">
            <li>Корзина</li>
          </Link>
          <Link className='link' to="/favourite">
            <li>Избранное</li>
          </Link>
        </div>
        <div className="icons">
                        <a href="https://vk.com/" target='_blank' ><img className='icon' src={VK} alt="" /></a>
                        <a href="https://ok.ru" target='_blank'><img className='icon' src={OK} alt="" /></a>
                        <a href="https://web.telegram.org/k/#@tavrida_che" target='_blank' ><img className='icon' src={TG} alt="" /></a>        </div>
      </div>
    </div>
  )
}

export default Footer