import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image1 from '../asserts/images/coffeeshop.jpeg';
import Image2 from '../asserts/images/coffee2.png';
import Image3 from '../asserts/images/coffee3.png';
const CarouselComponent = () => {
  return (  
    <Carousel style={{ position: 'fixed', bottom: '0px', right: '120px', maxWidth: '400px', margin: '30px' }}>
      <Carousel.Item >
        <img
          className="d-block1"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>COFFEE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block2"
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>PASTRY.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block3"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>DONUTS.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
