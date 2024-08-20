import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img/slider-half2.jpg'
import img2 from '../assets/img/slider-half2.jpg'
import img3 from '../assets/img/slider-half3.jpg'
import img4 from '../assets/img/slider-half4.jpg'

export default function SliderComp() {
  return (
    <div>
      <Carousel interval={4000} controls={false} indicators={false} className='car sli'>
      <Carousel.Item>
        <img
          className="slidimg "
          src={img1}
          alt="Map 1"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slidimg  "
          src={img2}
          alt="Map 2"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" slidimg "
          src={img3}
          alt="Map 3"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slidimg  "
          src={img4}
          alt="Map 3"
        />

      </Carousel.Item>

     
    </Carousel>
    </div>
  )
}
