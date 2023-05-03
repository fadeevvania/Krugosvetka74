import React, { useState } from 'react'
import './Gallery.scss'
import First from '../../img/gallery_first.jpg'
import Second from '../../img/gallery_second.jpg'
import Third from '../../img/gallery_third.jpg'
import Last from '../../img/gallery_last.jpg'
import Modal from './Modal'

const Gallery = () => {
    const [modalActive, setModalActive] = useState(false); 
    const [currentImage, setCurrentImage] = useState(null); 

    const openModal = (image) => { 
        setCurrentImage(image); 
        setModalActive(true); 
    } 
    return (
        <div className='Gallery'>
        <h1>Галлерея</h1>    
            <div className="gallery">
                <figure class="first">
                    <img src={First} class="gallery__img" alt="Image 1" onClick={()=>openModal(First)}/>
                </figure>
                <figure class="second">
                    <img src={Second} class="gallery__img" alt="Image 2" onClick={()=>openModal(Second)}/>
                </figure>
                <figure class="third">
                    <img src={Third} class="gallery__img" alt="Image 3" onClick={()=>openModal(Third)}/>
                </figure>
                <figure class="last">
                    <img src={Last} class="gallery__img" alt="Image 4" onClick={()=>openModal(Last)}/>
                </figure>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <img src={currentImage} alt="Modal" />
            </Modal>
        </div>
    )
}

export default Gallery