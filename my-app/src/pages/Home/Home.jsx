import React, { useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';

const Home = () => {
  const [selected,setSelected] = useState("");
  return (
    <div className='Home'>
      <div className="container">
        <div className="travel">
          <h1>Навстречу красоте</h1>
          <p>лучшие места края</p>
          <div className="btn">
            <Link className='link' to="/"><button className='button'>Забронировать тур</button></Link>
          </div>
        </div>
        <div className="dropdown">
          <Filter selected={selected} setSelected={setSelected}/>
        </div>
      </div>
    </div>
  )
}

export default Home