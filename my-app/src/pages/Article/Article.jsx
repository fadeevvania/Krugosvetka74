import React from 'react'
import "../Article/Article.scss"

const Article = () => {
  return (
    <div className="ArticleWrapper">
      <div className="ArticleContainer">
        <div className="Article">
          <p className='ArticleText'>Статьи</p>
        </div>
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
      </div>
    </div>
  )
}

export default Article