import React from 'react'
import "./style-contacts.css"
import Facebook from '../../img/icon/facebook.png'
import Instagram from '../../img/icon/instagram.png'
import Twitter from '../../img/icon/twitter.png'

export default function Contacts() {
  return (
    <section className='support'>
      <div className="top-support"><p>Контакти</p></div>
      <div className="left-support">

        <form className='form-support' action="#">
          <div className="text-support"><p>Контакти</p></div>
          <div className="line-support"></div>


          <div className="contacts-number"><p>+380994567890</p></div>
          <div className="contacts-number1"><p>+380994567890</p></div>
          <div className="img-contacts-social-media"><img src={Facebook} alt="facebook" /></div>
          <div className="img-contacts-social-media"><img src={Instagram} alt="instagram" /></div>
          <div className="img-contacts-social-media"><img src={Twitter} alt="twiter" /></div>
        </form>

      </div>
      <div className="right-support">
        <p>Ми вдячні вам за інтерес до нашого інформаційного порталу Гірсько-штурмової бригади. Наша мета - забезпечити вам найактуальнішу та найточнішу інформацію.</p>
        <p>Якщо у вас виникли питання або вам потрібна додаткова інформація, будь ласка, зв’яжіться з нами.</p>
      </div>
    </section>
  )
}
