import React, {useEffect, useState} from 'react';
// import ApartmentRankerAPI from "../API";
import ItemCard from "./ItemCard";
import {apt1} from "../mocks/mockData.js";
import "./Home.css"
import RankingsForm from './RankingsForm';
import NewApartmentForm from './NewApartmentForm';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getApartmentsFromAPI } from "../reducer/actions";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */

function Home() {

  // State for the apartment object returned from backend and used below
  const apartments = useSelector(store => Object.values(store.apartments), shallowEqual)
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()

  
  // This is the actual API call useEffect
  // useEffect(() => {
  //   async function getApartment() {
  //     /*TODO: Need to manipulate the picture URLs in backend to do two things:
  //       1. Only grab the relevant pictures. This should be doable by looking at the URLs
  //       2. Make all pictures the same size. The sizing appears to be at the end of each jpg.
  //     */
  //     let data = await ApartmentRankerAPI.fetchApartment();
  //     setApartment(data);
  //     setIsLoading(false);
  //     console.log(data)
  //   }
  //   getApartment();
  // }, [])


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
        <>
        <ItemCard address={a.apartment_address}
                  price={a.apartment_price}
                  url={a.apartment_url}
                  pics={a.apartment_photos}
        />
        <RankingsForm />
        </>
      ));
      
    }
    
    if (isLoading) {
      return <p>Loading</p>;
    }
    
    return (
      <div>
      Home
      <div className="projectcard-container">
        {!apartments ? <p>No pics yet</p> : renderApartmentPicsHTML(apartments) }

      </div>
      <NewApartmentForm />
    </div>
  )
  
}

export default Home;