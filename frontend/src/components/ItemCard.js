import React, {useState} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { Card, Row, Col } from 'react-bootstrap';
// import "./ItemCard.css";
import RankingsForm from "./RankingsForm";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */

function ItemCard({ address, price, pics, url }) {

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
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item}
      >
        <img className="projectImage" src={item} alt={item}/>
        
      </CarouselItem>
    );
  });

  return (
   <Card className="project-container col-12">
     <Row>
      <Col md={12} lg={4}>
        <div className="projectImageContainer">
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
       </Col>
       <Col md={12} lg={8}>
         <div className="projectDetails">
          <p className="project-title"><strong>{address}</strong></p>
          <p className="project-title"><strong>{price}</strong></p>
          <p>Check it out on <a href={`${url}`}>Craigslist</a>.</p>
         </div>
        <RankingsForm />
       </Col>
     </Row>

   </Card> 
    )
  }
  
  export default ItemCard;