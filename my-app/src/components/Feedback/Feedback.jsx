import React, { useState } from 'react'
import './Feedback.scss'
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import point_out from '../../img/Ellipse 24.png'
import point_in from '../../img/Ellipse 25.png'

const Feedback = () => {
    const [ellipseActive, setellipseActive] = useState(false);

    return (
        <div className='Feedback'>
            <div className="Feedback_container">
                <h1>Свяжитесь с нами, если <br /> у вас остались вопросы</h1>
                <div className="feedback">
                    <InputMask mask="+7 (999) 999-999" placeholder='Тел.' className='INPUTMASK'></InputMask>
                    <Link className='link' to="/"><button className='button'>Обратный звонок</button></Link>
                </div>
                <div className="confirmation"onClick={() => setellipseActive(!ellipseActive)} >
                    <div className="ellipse"  >
                        <img className='ellipse1'  src={point_out} alt="" />
                        <img className={ellipseActive ? "ellipse2 active" : "ellipse2 "}  src={point_in} alt="" />
                    </div>
                    <p>я согласен на обработку персональных данных</p>
                </div>


            </div>
        </div>
    )
}

export default Feedback;