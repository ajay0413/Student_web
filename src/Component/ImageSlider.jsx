import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../assets/TopImages/gal_1.jpeg";
import img2 from "../assets/TopImages/gal_2.jpeg";
import img3 from "../assets/TopImages/gal_3.jpeg";
import img4 from "../assets/TopImages/gal_4.jpeg";
import img5 from "../assets/TopImages/gal_5.jpeg";
import img6 from "../assets/TopImages/gal_6.jpeg";
import img7 from "../assets/TopImages/gal_7.jpeg";
import img9 from "../assets/TopImages/gal_9.jpg";
// Assuming you added the above CSS here

function MapCarousel() {
  return (
    <Carousel interval={3000} controls={false} indicators={false} className='car'>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img1}
          alt="Map 1"
        />
        <Carousel.Caption>
          
          <p>"Inspiring students to achieve academic excellence in a vibrant, inclusive community."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img2}
          alt="Map 2"
        />
        <Carousel.Caption>
       
          <p>"State-of-the-art facilities fostering creativity, innovation, and growth."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img3}
          alt="Map 3"
        />
        <Carousel.Caption>
        
          <p>"Engaging classrooms where passionate teachers ignite a love for learning."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img4}
          alt="Map 3"
        />
        <Carousel.Caption>
         
          <p>"Diverse extracurricular activities developing well-rounded, confident individuals."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img5}
          alt="Map 3"
        />
        <Carousel.Caption>
          
          <p>"Collaborative spaces where students explore, discover, and excel."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img6}
          alt="Map 3"
        />
        <Carousel.Caption>
         
          <p>"Celebrating cultural diversity and promoting global perspectives."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img7}
          alt="Map 3"
        />
        <Carousel.Caption>
          
          <p> "Athletic programs that build teamwork, discipline, and school spirit."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 im"
          src={img9}
          alt="Map 3"
        />
        <Carousel.Caption>
        
          <p> "A nurturing environment where students are empowered to reach their full potential."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default MapCarousel;