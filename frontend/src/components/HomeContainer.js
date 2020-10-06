import React, { useEffect, useState } from "react";
import { checkToken, verifyToken } from "../helpers/auth";
import InitialHomeLoad from "./InitialHomeLoad";
import Home from "./Home";

function HomeContainer() {

  // On initial load, check for a token to determine which component to render


// TODO: add a helper hook that handles the auth calls
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
    {!error 
      ? <InitialHomeLoad moveToNext={handleMoveToNext} />
      : <Home />}
    </>  
  );

}

export default HomeContainer;