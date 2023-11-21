import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarusel1 from '../../img/Carusel/1.jpg'
import ImageCarusel2 from '../../img/Carusel/2.jpg'
import ImageCarusel3 from '../../img/Carusel/3.jpg'
import ImageCarusel4 from '../../img/Carusel/4.jpg'
import ImageCarusel5 from '../../img/Carusel/5.jpg'

function Carusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCarusel1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCarusel2}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCarusel3}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCarusel4}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageCarusel5}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;