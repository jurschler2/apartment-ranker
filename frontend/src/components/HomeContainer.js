import React, { useEffect, useState } from "react";
import { checkToken } from "../helpers/auth";
import InitialHomeLoad from "./InitialHomeLoad";
import Home from "./Home";

function HomeContainer() {

  // On initial load, check for a token to determine which component to render
  const [createdUser, setCreatedUser] = useState(false);


  useEffect(
    function checkForToken() {
      if(checkToken()) setCreatedUser(true)
    }, [createdUser]
  );

  const handleMoveToNext = () => {

    console.log("Do we even get in here?")

    setCreatedUser(true);

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