import React from 'react'
import Header from './Component/header/Header';
import Section from './Component/section/Section'
import Chapter_about from './Component/chapter-about/Chapter-about';
import News from './Component/chapter-news-photo/News';
import Footer from './Component/footer/footer';

export default function Apps() {
  return (
    <>
      <Header />
      <Section />
      <Chapter_about />
      <News />
      <Footer/>
    </>
  )
}
