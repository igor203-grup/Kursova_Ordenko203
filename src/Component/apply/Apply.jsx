import React from 'react'
import "./style-apply.css"

export default function Apply() {
  return (
    <section className='support'>
      <div className="top-support"><p></p></div>
      <div className="left-support">

        <form className='form-support' action="#">
          <div className="text-support"><p>До заявки</p></div>
          <div className="line-support"></div>
          <div className="lbl-name"><label htmlFor="#">ПІБ</label></div>
          <div className="input-support-name"><input type="text" name="#" id="#" placeholder="Повне ім'я" /></div>
          <div className="lbl-mail"><label htmlFor="#">Ваша почта</label></div>
          <div className="input-support-mail"><input type="email" name="#" id="#" placeholder="Введіть почту" /></div>
          <div className="button-send"><button><a href="#">Подати заявку</a></button></div>
        </form>

      </div>
      <div className="right-support">
      </div>
    </section>
  )
}
