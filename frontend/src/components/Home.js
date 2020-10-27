import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import NewApartmentForm from './NewApartmentForm';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getApartmentsFromAPI } from "../reducer/actions";
import { Row, Col, Container } from "react-bootstrap";

/**
 *  DESCRIPTION: Component that taps into the Redux store to access the session's apartments state object. Renders an ItemList utilizing these apartments
 *               and renders the form needed to add more apartments to both the Redux store and backend.
 *  PROPS: N/A
 *  FLOW: App => Routes => HomeContainer => Home
 *  PARENT: HomeContainer
 *  CHILDREN: ItemList, NewApartmentForm
 */

function Home() {

  // State for the apartment object returned from backend and used below
  const [isLoading, setIsLoading] = useState(true);
  const apartments = useSelector(store => Object.values(store.apartments), shallowEqual)
  const dispatch = useDispatch()


  // UseEffect to get a user's apartments from the API.
  useEffect(
    function FetchApartmentsFromAPI() {
      dispatch(getApartmentsFromAPI())
    }, [dispatch]
  );


  // UseEffect to handle the change of UX from loading while fetching the apartments to displaying the apartments.
  useEffect(
    function PopulateApartments() {
      if (apartments) {
        setIsLoading(false);
      }
    }, [apartments]
  );
    

  // TODO: create a loading component for a better UX
    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
    <> 
     <Container className="sectionContainer" id="/apartments">
       <Row>
         <Col md={12} lg={12}>
          <div className="itemCardContainer">
            {!apartments
              ? <p>No apartments have been added yet.</p>
              : <ItemList apartments={apartments} /> }
          </div>
         </Col>
       </Row>
      </Container>
      <Container className="sectionContainer" id="/add">  
        {/* <Row> */}
          <Col md={12} lg={12}>
            <div className="newApartmentForm">
              <NewApartmentForm />
            </div> 
          </Col>
        {/* </Row> */}
      </Container>
      </>   
  )
}

export default Home;