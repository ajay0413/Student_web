import React from 'react'
import MapCarousel from './ImageSlider';
import CardContainer from './CardContainer';
import Container from './Container';

export default function Images() {
  return (
    <div className='backside'>
       <MapCarousel/>
       <Container/>
       <CardContainer/>
      
    </div>
  )
}
