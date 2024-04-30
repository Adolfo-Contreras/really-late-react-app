import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react.es';
import NewsCard from './NewsCard';


export default function Carousel({data}) {
  const [sliderRef] = useKeenSlider({slideChanged(){console.log('slide changed')}, loop:true, mode:'free-snap', slides:{perView:3, spacing: 10}});
  console.log('idk some thing' + data)
  const articles = data.articles;
  console.log(articles) 
  return (
    <div ref={sliderRef} className='keen-slider h-72'>
    {articles.map((article, index) => (
      <div key={index} className='keen-slider__slide h-full'><NewsCard data={article}/></div>
    ))}
    </div>
  );
}