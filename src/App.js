import React from 'react'
import Support from './Component/chapter-support/Support';
import Contacts from './Component/contacts/Contacts';
import Apps from './Apps';
import { Routes, Route } from 'react-router-dom'
import Header from './Component/header/Header';
import Section from './Component/section/Section';
import Chapter_about from './Component/chapter-about/Chapter-about';
import News from './Component/chapter-news-photo/News';
import Apply from './Component/apply/Apply';
import Footer from './Component/footer/footer';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Apps />} />
      <Route path='/contacts' element={[<Header />, <Contacts />,<Footer/>]} />
      <Route path='/support' element={[<Header />, <Support />,<Footer/>]} />
      <Route path='/home' element={<Apps />} />
      <Route path='/about' element={[<Header />, <Section />, <Chapter_about />,<Footer/>]} />
      <Route path='/news' element={[<Header />, <Section />, <News />,<Footer/>]} />
      <Route path='/apply' element={[<Header />,<Apply />,<Footer/>]} />



    </Routes>
  )
}
