import React from 'react'
import logo from '../../img/Шеврон.webp'
import './style-header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
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
    <header id='header' className='header'>
      <div className='left-header'>
        <img src={logo} alt="Бригада" />
      </div>
      <div className='right-header'>
        <ul className='menu-header'>
          <div className='list-header'><li ><Link to="/home" >ГОЛОВНА</Link></li></div>
          <div className='list-header'><li ><Link to="/about">ПРО НАС</Link></li></div>
          <div className='list-header'><li ><Link to="/news" >НОВИНИ & ФОТО</Link></li></div>
          <div className='list-header'><li ><Link to="/support">SUPPORT</Link></li></div>
          <div className='list-header'><li ><Link to="/contacts">КОНТАКТИ</Link></li></div>
        </ul>
      </div>
      <div className='join-header'>
        <div className="apply-header"><Link to="/apply">ПОДАТИ ЗАЯВКУ</Link></div>
      </div>

    </header>
  )
}
