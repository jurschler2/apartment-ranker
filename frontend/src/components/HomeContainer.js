import React, { useEffect, useState } from "react";
import { checkToken, verifyToken } from "../helpers/auth";
import InitialHomeLoad from "./InitialHomeLoad";
import Home from "./Home";

function HomeContainer() {

  // On initial load, check for a token to determine which component to render
  const [createdUser, setCreatedUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function checkForToken() {
      if(checkToken()) {
        if (await verifyToken()) {
          setCreatedUser(true)
        }
      }
    }
    checkForToken();
    setIsLoading(false);
  }, [createdUser]
  );

  const handleMoveToNext = () => {

    setCreatedUser(true);

  }

   
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
    {!createdUser 
      ? <InitialHomeLoad moveToNext={handleMoveToNext} />
      : <Home />}
    </>  
  );

}

export default HomeContainer;