import React, {useState} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */

function ItemCard({ address, price, pics, url }) {

  console.log("This is the address prop:", address)
  console.log("This is the price prop:", price)
  console.log("This is the pics prop:", pics)
  console.log("This is the url prop:", url)

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === pics.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? pics.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = pics.map((item) => {

    console.log("This is the image source?", item.src)
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.src}/>
        
      </CarouselItem>
    );
  });

  return (
    <div className="project-container">
      <div className="project-img-container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={pics} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>    
      </div>
      <div className="project-description-container">
        <div className="project-address"><strong>{address}</strong></div>
        <div className="project-price"><strong>{price}</strong></div>
        <div className="project-description">
          <p>Check it out on <a href={`${url}`}>Craigslist</a>.</p>
        </div>
      </div>
    </div>
    )
  }
  
  export default ItemCard;