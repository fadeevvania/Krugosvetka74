import React from 'react'
import './Section.scss'
import First from '../../img/HorseWooman.png'
import Second from '../../img/Boots.png'
import Third from '../../img/Pelmeni.png'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
    <div className="Article_container">


      <div className="first">
       <Link className='link' to="/"><div className="Relaxx ArticleWindowsChildd">
          <p className='ArticleWindowsRelaxTextt'>Где отдохнуть в зимние выходные?</p>
        </div>
        </Link> 
      </div>


      <div className="second">
        <Link className='link' to="/"><div className="Boots ArticleWindowsChildd">
          <p className='ArticleWindowsBootsText'>Фестиваль Уральские валенки в г. Куса</p>
        </div>
        </Link> 
      </div>

      <div className="third">
       <Link className='link' to="/"> <div className="Food ArticleWindowsChildd">
          <p className='ArticleWindowsFoodText'>Музей пельменя г. Миасс</p>
        </div>
        </Link> 
      </div>
    </div>
  )
}

export default Section