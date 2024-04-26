import { useRef, useState, useEffect,  } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react.es';
import NewsCard from './NewsCard';

export default function Carousel() {
  const [sliderRef] = useKeenSlider({slideChanged(){console.log('slide changed')}, loop:true, mode:'free-snap', slides:{perView:3, spacing: 10}}); 
  return (
    <div ref={sliderRef} className='keen-slider'>
      <div className='keen-slider__slide'><NewsCard props={{title:'ligma', description:'description'}}/></div>
      <div className='keen-slider__slide'><NewsCard/></div>
      <div className='keen-slider__slide'><NewsCard/></div>
      <div className='keen-slider__slide'><NewsCard/></div>
    </div>
  );
}
