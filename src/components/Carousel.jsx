import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";

export default function Carousel({ data }) {
  //for lazy loading
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState([]);

  const [sliderRef] = useKeenSlider({
    animationEnded(s) {
      //for lazy loading it tracks the current slide
      setCurrentSlide(s.track.details.rel);
    },
    loop: true,
    mode: "free-snap",
    initial: 0,
    slides: { perView: 2, spacing: 10 },
  });

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  //articles and filtering the articles that are invalid
  const articles = data.articles;
  const filterdarticles = articles.filter(
    (article) => article.url != "https://removed.com"
  );
  console.log(articles);
  return (
    <div ref={sliderRef} className="keen-slider h-72">
      {filterdarticles.map((article, index) => (
        <div key={index} className="keen-slider__slide lazy__slide h-full">
          <NewsCard data={article} />
        </div>
      ))}
    </div>
  );
}
