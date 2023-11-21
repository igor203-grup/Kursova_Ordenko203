import React from 'react'
import './style-footer.css'
import Facebook from '../../img/icon/facebook.png'
import Instagram from '../../img/icon/instagram.png'
import Twitter from '../../img/icon/twitter.png'

export default function Footer() {
  return (
    <section className='content-footer' >

      <div className="top-footer"><a href="https://www.google.com.ua/maps/place/%D0%A1%D0%B8%D0%BD%D1%8F%D0%BA,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+07351/@50.6826692,30.2465584,14z/data=!3m1!4b1!4m6!3m5!1s0x472b289dbf723d0b:0x21b4260d5cfe1394!8m2!3d50.6826985!4d30.2668159!16s%2Fg%2F120ry1y0?entry=ttu" target='_blank' rel="noreferrer">Ми на карті</a></div>
      <div className="line-footer"></div>
      <div className="bottom-footer">
        <div className="left-footer">

        </div>
        <div className="center-footer"><p>Всі права захищені 2023 &copy;</p></div>
        <div className="right-footer">
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="twitter" />
          <img src={Twitter} alt="instagram" />
        </div>
      </div>
    </section>
  )
}
