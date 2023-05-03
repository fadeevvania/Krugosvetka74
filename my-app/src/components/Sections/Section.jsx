import React from 'react'
import './Section.scss'
import First from '../../img/HorseWooman.png'
import Second from '../../img/Boots.png'
import Third from '../../img/Pelmeni.png'

const Section = () => {
    return (
        <div className="ArticleWindows">
          <div className="ArticleWindowsRelax ArticleWindowsChild">
            <p className='ArticleWindowsRelaxText'>Где отдохнуть в зимние выходные?</p>
          </div>
          <div className="ArticleWindowsBoots ArticleWindowsChild">
            <p className='ArticleWindowsBootsText'>Фестиваль Уральские валенки в г. Куса</p>
          </div>
          <div className="ArticleWindowsFood ArticleWindowsChild">
            <p className='ArticleWindowsFoodText'>Музей пельменя г. Миасс</p>
          </div>
          
        </div>
    )
}

export default Section