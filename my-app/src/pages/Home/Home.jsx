import React, { useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';
import InputWIthSearch from '../../components/Filter/InputWIthSearch';
import Section from '../../components/Sections/Section';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import Feedback from '../../components/Feedback/Feedback';

const Home = () => {
  const [selected, setSelected] = useState("");
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
        <InputWIthSearch />
        <Section />
        <Gallery />
        <Reviews />
        <Feedback />
      </div>
    </div>
  )
}

export default Home