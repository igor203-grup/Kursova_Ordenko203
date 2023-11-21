import React from 'react'
import '../section/style-section.css'
import ImgSection from '../../img/imagekursowa/coom1.jpg'

export default function Section() {
  const handlerLinkClick = (e) => {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    const element = document.querySelector(id);
    console.log(element);
    const rect = element.getBoundingClientRect();
    console.log(rect);
    window.scrollTo({
      top: rect.top + window.pageYOffset,
      behavior: 'smooth',
    });

  };
  return (
    <section id='top-section' className='top-section'>

      <div style={{ backgroundImage: `url(${ImgSection})` }} className="fight-with-us">
        <div className="nametitle">
          <h1>Героям слава!!!</h1>
        </div>
        <div className="scroll-btm-section">
          <a href='#about-id' onClick={handlerLinkClick} className='scrol-about' ></a>
        </div>
      </div>





    </section>
  )
}

