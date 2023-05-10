import InputMask from 'react-input-mask';
import './Auth.scss'
import React, { useState } from 'react';



const Register = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [matchError, setMatchError] = useState(false);

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
    setMatchError(false);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
    setMatchError(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      setMatchError(true);
      return;
    }
    // continue with form submission
  };

  return (
    <div className="auth">
      <form action="#" className="form" onSubmit={handleFormSubmit}>
        <InputMask mask="+7 (999) 999-99-99" placeholder="Тел." className="INPUTMASK"></InputMask>
        <input id="p1" type="password" placeholder="пароль" value={password1} onChange={handlePassword1Change} />
        <input id="p2" type="password" name="password" placeholder="пароль еще раз" value={password2} onChange={handlePassword2Change} />
        {matchError && <p className="error">Пароли не совпадают</p>}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Register;

