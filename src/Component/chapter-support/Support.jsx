import React from 'react'
import '../chapter-support/style-support.css'

export default function Support() {
  return (
    <section className='support'>
      <div className="top-support"><p>Підтримка</p></div>
      <div className="left-support">

        <form className='form-support' action="#">
          <div className="text-support"><p>Підтримка</p></div>
          <div className="line-support"></div>
          <div className="lbl-name"><label htmlFor="#">Ім'я</label></div>
          <div className="input-support-name"><input type="text" name="#" id="#" placeholder="Введіть ім'я" /></div>
          <div className="lbl-mail"><label htmlFor="#">Ваша почта</label></div>
          <div className="input-support-mail"><input type="email" name="#" id="#" placeholder="Введіть почту" /></div>
          <div className="lbl-support"><label htmlFor="#">З'язатись з нами</label></div>
          <div className="input-support"><input type="text" name="#" id="#" /></div>
          <div className="button-send"><button><a href="#">ВІДПРАВИТИ</a></button></div>
        </form>

      </div>
      <div className="right-support">
        <p>Дякуємо за ваше звернення. Ми раді, що ви зацікавлені в інформаційному порталі Гірсько-штурмової бригади.
          На жаль, наразі у нас немає детальної інформації про цей портал. Якщо ви маєте конкретні запитання або потребуєте допомоги, будь ласка, надайте більше деталей, і ми з радістю допоможемо вам.
          З повагою, Команда підтримки</p>
      </div>
    </section>
  )
}
