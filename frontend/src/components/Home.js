import React, {useEffect, useState} from 'react';
import ApartmentRankerAPI from "../API";

function Home() {

  // State for the apartment object returned from backend and used below
  const [apartment, setApartment] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getApartment() {
      /*TODO: Need to manipulate the picture URLs in backend to do two things:
        1. Only grab the relevant pictures. This should be doable by looking at the URLs
        2. Make all pictures the same size. The sizing appears to be at the end of each jpg.
      */
      let data = await ApartmentRankerAPI.fetchApartment();
      setApartment(data);
      setIsLoading(false);
      console.log(data)
    }
    getApartment();
  }, [])


  const renderApartmentPicsHTML = () => {
    return (apartment
      .pics
      .map(p => (
        <div>
          <span>
            This is a pic.
            <img src={p['src']} alt={p['src']}/>
          </span>
        </div>
      )))
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      Home
      {!apartment ? <p>No pics yet</p> : renderApartmentPicsHTML() }
    </div>
  )

}

export default Home;