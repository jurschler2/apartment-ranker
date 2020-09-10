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
        console.log("These are the apartments:", apartments)
      }
    }, [apartments]
  );

  const renderApartmentPicsHTML = (apts) => {

    return apts
      .map(a => (
        <ItemCard address={a.apartment_address}
                  price={a.apartment_price}
                  url={a.apartment_url}
                  pics={a.apartment_photos}
                  rankings={a.apartment_rankings}
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