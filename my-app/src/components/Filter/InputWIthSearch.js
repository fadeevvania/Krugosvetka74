
import React, { useState } from "react";
import './inputSearch.scss';
import { Link } from "react-router-dom";

function InputWIthSearch() {
    const [val, setVal] = useState('')
    const data = ["Челябинск","Екатеринбург","Миас","Златоуст","Пермь","Кунгур","Троицк","Чебаркуль","Зюраткуль","Таганай"]
    const type =["тематическая программа","сюжетная программа","квест","поездка","экскурсия ","детский","активный"]
    const duration = ["1 день","2 дня","3 дня","4 дня","5 дней","6 дней","7 дней","8 дней","9 дней"]
    return (
        <div className="main">
            <div className="Up">
                <div className="Search">
                    <p>Откуда</p>
                    <input list="data" style={{ width: "487" + "px" }} onChange={(e) => setVal(e.target.value)} placeholder="" />
                    <datalist id="data">
                        {data.map((op) => <option>{op}</option>)}
                    </datalist>
                </div>
                <div className="Search">
                    <p>Куда</p>
                    <input list="data" style={{ width: "663" + "px" }} onChange={(e) => setVal(e.target.value)} placeholder="" />
                    <datalist id="data">
                        {data.map((op) => <option>{op}</option>)}
                    </datalist>
                </div><div className="Search">
                    <p>Дата</p>
                    <input list="date" type="date" style={{ width: "350" + "px" }} onChange={(e) => setVal(e.target.value)} placeholder="" />
                </div>

            </div>
            <div className="Down">
                <div className="Search">
                    <p>Длительность</p>
                    <input list="duration" style={{ width: "350" + "px" }} onChange={(e) => setVal(e.target.value)} placeholder="" />
                    <datalist id="duration">
                        {duration.map((op) => <option>{op}</option>)}
                    </datalist>
                </div>
                <div className="Search">
                    <p>Кол-во человек</p>
                    <input  type="number" style={{ width: "253" + "px" }}  />
                </div>
                <div className="Search">
                    <p>Вид</p>
                    <input list="type" style={{ width: "527" + "px" }} onChange={(e) => setVal(e.target.value)} placeholder="" />
                    <datalist id="type">
                        {type.map((op) => <option>{op}</option>)}
                    </datalist>
                </div>
                <div className="btn">
                    <Link className='link' to="/"><button className='button'>Найти туры</button></Link>
                </div>
            </div>

        </div>
    );
}
export default InputWIthSearch;