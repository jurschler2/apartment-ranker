import React, {useEffect, useState} from 'react';
// import ApartmentRankerAPI from "../API";
import ItemCard from "./ItemCard";
import {apt1} from "../mocks/mockData.js";
import "./Home.css"

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */

function Home() {

  // State for the apartment object returned from backend and used below
  const [apartment, setApartment] = useState()
  const [isLoading, setIsLoading] = useState(true);

  
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


  useEffect(() => {

    setApartment(apt1);
    setIsLoading(false);

  }, [])



  const renderApartmentPicsHTML = () => {

    return (
      <ItemCard address={apartment.address}
                price={apartment.price}
                url={apartment.url}
                pics={apartment.pics} />
    )

  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      Home
      <div className="projectcard-container">
        {!apartment ? <p>No pics yet</p> : renderApartmentPicsHTML() }

      </div>
    </div>
  )

}

export default Home;