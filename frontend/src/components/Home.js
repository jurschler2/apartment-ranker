import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {

  // State for the apartment object returned from backend and used below
  const [apartment, setApartment] = useState()

  // Placeholder base URL for getting the apartment from the backend
  let baseURL = "http://localhost:5000/apartment";


  useEffect(
    function getApartment() {
      async function getApartmentAPI() {

        const response = await axios.get(baseURL);

        if (response) setApartment(response.data);

        console.log("This is the response:", response)
        
      }
      getApartmentAPI();
      console.log("This is the apartment:", apartment)
    },
    []
  )

  const renderApartmentPicsHTML = () => {
    return apartment.pics
      .map(p => (
        <div>
          <span>
            This is a pic.
            <img src={p.src} />
          </span>
        </div>
      ))
  }

  return (
    <div>
      Home
      {apartment ? renderApartmentPicsHTML() : <p>No pics yet</p>}
    </div>
  )

}

export default Home;