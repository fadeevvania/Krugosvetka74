import React, { useEffect, useState } from 'react'
import './Filter.scss'
import Down from '../../img/down.png'

function Filter({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const Where_From = ["Челябинск", "Екатеринбург", "Миас","Златоуст","Пермь","Кунгур","Троицк","Чебаркуль","Зюраткуль","Таганай",];
  const Where = ["", "Екатеринбург", "Миас","Златоуст","Пермь","Кунгур","Троицк","Чебаркуль","Зюраткуль","Таганай",];
  const handleOutsideClick = (e) => {
    if (isActive && !e.target.closest(".dropdown")) {
      setIsActive(false);
    }
  };

  useEffect(() => { 
    document.addEventListener("click", handleOutsideClick); 
    return () => { 
      document.removeEventListener("click", handleOutsideClick); 
    }; 
  }, [isActive]);

  return (
    <div className="Dropdown">
<div className="dropdown"style={{width:"487"+ "px"}}>
      Откуда
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={Down} className="down" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {Where_From.map((option, id) => (
            <div
              key={id}
              className="dropdown-item"
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="dropdown " style={{width:"663"+ "px"}}>
      Куда
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={Down} className="down" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {Where.map((option, id) => (
            <div
              key={id}
              className="dropdown-item"
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="dropdown " style={{width:"350"+ "px"}}>
      Дата
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={Down} className="down" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {Where.map((option, id) => (
            <div
              key={id}
              className="dropdown-item"
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
      









    </div>
    
  );
}




export default Filter