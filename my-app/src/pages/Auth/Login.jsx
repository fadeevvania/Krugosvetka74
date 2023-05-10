import React from 'react'
import InputMask from 'react-input-mask';
import './Auth.scss'
const Login = () => {
  return (
    <div className='auth'>
      <form action="#" class="form">
	<input type="text" name="name" placeholder="Имя" required />
	<input type="email" name="email" placeholder="E-Mail" />
  <InputMask mask="+7 (999) 999-999" placeholder='Тел.' className='INPUTMASK'></InputMask>

	<button type="submit">Отправить</button>
</form>
    </div>
  )
}

export default Login