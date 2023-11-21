import React from 'react'
import '../chapter-news-photo/style-news-photo.css'
import Carusel from './Carusel'
import NewsImg10 from '../../img/Section-News/10.jpeg'
import NewsImg11 from '../../img/Section-News/11.jpg'
import NewsImg12 from '../../img/Section-News/12.jpg'
import NewsImg13 from '../../img/Section-News/13.png'
import NewsImg14 from '../../img/Section-News/14.jpeg'


export default function News() {
  return (
    <section id='news-photo' className='news-photo'>
      <div className="news-brig"><p>Новини Гірсько Штурмової Бригади</p></div>
      <div className="slider">
        <Carusel />
      </div>

      <div className="news-content-image">
        <div className="photo-content-news"><img src={NewsImg10} alt="News" /></div>
        <div className="text-content-news">
          <p>У п'ятницю, 3 листопада, Росія завдала ракетного удару по воїнах закарпатської 128-ї окремої гірсько-штурмової бригади у прифронтовому селі Запорізької області. За даними ЗМІ та військових, захисників зібрали на нагородження до Дня артилерії. Внаслідок цинічної атаки є загиблі та поранені. </p>
          <a href="https://tsn.ua/exclusive/raketniy-udar-po-voyinah-128-yi-brigadi-yakih-zibrali-na-nagorodzhennya-vse-scho-vidomo-pro-tragediyu-na-zaporizhzhi-2444011.html" target='_blank'>Детальніше...</a>
        </div>
      </div>

      <div className="news-content-image">
        <div className="text-content-news">
          <p>Міністерство внутрішніх справ України розпочало формування штурмових бригад "Гвардія наступу". Ці штурмові бригади братимуть участь у звільненні Луганська, Донецька і Криму.

            Як повідомив виконувач обов’язків міністра внутрішніх справ Ігор Клименко, бригади отримали назви "Буревій", "Червона калина", "Кара-Даг", "Рубіж", "Спартан", "Азов", "Сталевий кордон" та "Лють".</p>
          <a href="https://www.unian.ua/society/shturmovi-brigadi-mvs-gvardiya-nastupu-shcho-vidomo-pro-novi-pidrozdili-12131607.html" target='_blank'>Детальніше...</a>
        </div>
        <div className="photo-content-news"><img src={NewsImg11} alt="News" /></div>
      </div>

      <div className="news-content-image">
        <div className="photo-content-news"><img src={NewsImg12} alt="News" /></div>
        <div className="text-content-news">
          <p>Речник Нацгвардії під час прямого ефіру телемарафону «Єдині новини» розповів про формування штурмових бригад МВС під єдиним брендом «Гвардія наступу». Також він докладно поінформував про функції таких підрозділів і пояснив, як долучитись до них добровольцям.</p>
          <a href="www.128brigade.com" target='_blank'>Детальніше...</a>
        </div>
      </div>

      <div className="news-content-image">
        <div className="text-content-news">
          <p>Бійці 128 окремої гірсько-штурмової Закарпатської бригади приймали вітання з нагоди Дня Незалежності України. Урочистості відбулися в скромній, але святковій обстановці, як і годиться в зоні бойових дій. На початку зборів прозвучав Гімн України, а далі присутні вшанували хвилиною мовчання пам'ять тих, хто заплатив за Україну найдорожчим, – власними життями.</p>
          <a href="https://www.128brigade.com/post/%D1%81%D1%8C%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%96-%D0%B1%D1%96%D0%B9%D1%86%D1%96-128-%D0%BE%D0%B3%D1%88%D0%B1%D1%80-%D0%BF%D1%80%D0%B8%D0%B9%D0%BC%D0%B0%D0%BB%D0%B8-%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BD%D1%8F-%D0%B7-%D0%BD%D0%B0%D0%B3%D0%BE%D0%B4%D0%B8-%D0%B4%D0%BD%D1%8F-%D0%BD%D0%B5%D0%B7%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%96" target='_blank'>Детальніше...</a>
        </div>
        <div className="photo-content-news"><img src={NewsImg13} alt="News" /></div>
      </div>

      <div className="news-content-image">
        <div className="photo-content-news"><img src={NewsImg14} alt="News" /></div>
        <div className="text-content-news">
          <p>На Ставці обговорили деталі трагедії з бійцями 128 окремої гірсько-штурмової бригади. Про це повідомив Президент Володимир Зеленський у вечірньому відеозверненні 6 листопада. З цього приводу доповідали військові, міністр оборони, а також керівник Служби безпеки України. </p>
          <a href="https://lb.ua/society/2023/11/06/583073_stavtsi_obgovorili_detali_tragedii.html" target='_blank'>Детальніше...</a>
        </div>
      </div>

    </section>
  )
}
