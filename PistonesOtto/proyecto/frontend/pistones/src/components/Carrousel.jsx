import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../styles/components/layout/Carrousel.css';

function CarrouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Banner-desk-6a.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='boxCarrousel arriba'>
          <h1>Servcio de Reparación</h1>
          <span>De grandes pistones navieros</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Banner-desk-7a.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
            <div className='boxCarrousel medio'>
          <h1>Rectificación de Motores</h1>
          <span>Diesel y Nafteros</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Fund.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='boxCarrousel abajo'>
          <h1>Fundición y Mecanizado</h1>
          <span>En general</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/fabrica.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='boxCarrousel medio'>
          <h1>Fabrica de Pistones</h1>
          <span>De todo tipo y motores</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

  
  export default CarrouselHome;