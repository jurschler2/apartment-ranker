import React, {useEffect, useState} from 'react';
import ItemCard from "./ItemCard";
import RankingsForm from './RankingsForm';
import NewApartmentForm from './NewApartmentForm';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getApartmentsFromAPI } from "../reducer/actions";
import { Row, Col, Container } from "react-bootstrap";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */

function Home() {

  // State for the apartment object returned from backend and used below
  const [isLoading, setIsLoading] = useState(true);
  const apartments = useSelector(store => Object.values(store.apartments), shallowEqual)
  const dispatch = useDispatch()

  useEffect(
    function FetchApartmentsFromAPI() {
      dispatch(getApartmentsFromAPI())
    }, [dispatch]
  );

  useEffect(
    function PopulateApartments() {
      if (apartments) {
        setIsLoading(false);
      }
    }, [apartments]
  );


  /*TODO: Add in components for the initial homepage and the demo GIF.
  * Initial Component could be an AOS timer that has a message that goes away or something?
  * GIF component should be a container which will just hold the file.
  * File still needs to be made once all styling has taken place
  */

  // TODO: Make this into a component
  const renderApartmentPicsHTML = (apts) => {

    return apts
      .sort((a,b) => b.apartment_rankings.ranking_aggregate - a.apartment_rankings.ranking_aggregate)
      .map(a => (
        <ItemCard address={a.apartment_address}
                  price={a.apartment_price}
                  url={a.apartment_url}
                  pics={a.apartment_photos}
                  rankings={a.apartment_rankings}
                  key={a.apartment_url}
        />
      )); 
    }
    
    if (isLoading) {
      return <p>Loading</p>;
    }
    

    return (
    <> 
     <Container className="sectionContainer" id="/apartments">
       <Row>
         <Col md={12} lg={12}>
           <h3>Apartments</h3>
         </Col>
       </Row>
       <Row>
         <Col md={12} lg={12}>
          <div className="itemCardContainer">
            {!apartments ? <p>No pics yet</p> : renderApartmentPicsHTML(apartments) }
          </div>
         </Col>
       </Row>
      </Container>
      <Container className="sectionContainer" id="/add">  
        <Row>
          <Col md={12} lg={12}>
            <div className="newApartmentForm">
              <NewApartmentForm />
            </div> 
          </Col>
        </Row>
      </Container>
      </>   
  )
}

export default Home;