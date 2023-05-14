import React from 'react'
import InputMask from 'react-input-mask';
import './Auth.scss'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="auth">
    <form action="#" className="form" >
      <h1>Вход</h1>
      <h4>Телефон</h4>
      <InputMask mask="+7 (999) 999-99-99"  className="INPUTMASK"></InputMask>
      <div className="btn">
      <button type="submit">Войти</button>
      </div>
      <h3>или</h3>
     <Link className='link' to="/register"><h2>Зарегистрироваться</h2></Link> 
      <h3>Регистрируясь, вы соглашаетесь <br/>
с Политикой конфиденциальности</h3>
    </form>
  </div>
  )
}

export default Login