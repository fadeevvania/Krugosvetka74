import React from 'react'
import './Reviews.scss'
import Ekaterina from '../../img/Ekaterina.png'
import Elena from '../../img/Elena.png'
import Rim from '../../img/Rim.png'

const Reviews = () => {
    return (

        <div className='Reviews'>
            <h1>Отзывы</h1>
            <div className="Reviews_container">
                <div className="review">
                    <img src={Ekaterina} alt="" />
                    <h2>Екатерина</h2>
                    <p>Спасибо за тур в Екатеринбург на Свердловскую киностудию! Очень интересно и познавательно. Дети были в восторге. Светлана показала интересные места в городе, удивляет каждый раз, спасибо! Ждём новых встреч с нетерпением!</p>
                </div>
                <div className="review">
                    <img src={Elena} alt="" />
                    <h2>Елена</h2>
                    <p>Большое спасибо Светлане и Татьяне за чудесные поездки, эмоции! Замечательная организация тура. Самое лучшее место — это прекрасные пейзажи, чистейший воздух, покой и умиротворение.</p>
                </div>
                <div className="review">
                    <img src={Rim} alt="" />
                    <h2>Римма</h2>
                    <p>Светлана — супергид. Спасибо за интересную поездку в Екатеринбург, очень познавательно, позитивно, с юмором. Очень благодарны!</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews