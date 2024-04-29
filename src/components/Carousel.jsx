import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react.es';
import NewsCard from './NewsCard';

const thingy = {title:'jimmy did a big oopsie', description:'he killed someone'}
export default function Carousel() {
  const [sliderRef] = useKeenSlider({slideChanged(){console.log('slide changed')}, loop:true, mode:'free-snap', slides:{perView:3, spacing: 10}}); 
  return (
    <div ref={sliderRef} className='keen-slider'>
      {}
    </div>
  );
}
