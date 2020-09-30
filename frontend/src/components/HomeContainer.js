import React, { useEffect, useState } from "react";
import { checkToken } from "../helpers/auth";
import InitialHomeLoad from "./InitialHomeLoad";

function HomeContainer() {

  // On initial load, check for a token to determine which component to render
  const [createdUser, setCreatedUser] = useState(false);


  useEffect(
    function checkForToken() {
      token = checkToken();
    }, [createdUser]
  );

  return (
    <>
    {!token 
      ? <InitialHomeLoad />
      : <Home />}
    </>  
  );

}

export default HomeContainer;