import React, { useEffect, useState } from "react";
import { checkToken, verifyToken, generateToken } from "../helpers/auth";
import useAPI from "../helpers/useAPI";
import InitialHomeLoad from "./InitialHomeLoad";
import Home from "./Home";


function HomeContainer({user}) {

  // On initial load, check for a token to determine which component to render


// TODO: add a helper hook that handles the auth calls
  // useEffect(() => {
  //   async function checkForToken() {
  //     if(checkToken()) {
  //       if (await verifyToken()) {
  //         setCreatedUser(true)
  //       }
  //     }
  //   }
  //   checkForToken();
  //   setIsLoading(false);
  // }, [createdUser]
  // );
  const [haveToken, setHaveToken] = useState(false)

  const handleMoveToNext = () => {

    generateToken();
    setHaveToken(true);

  }

  return (
    <>
    {(!haveToken && !user)
      ? <InitialHomeLoad moveToNext={handleMoveToNext} />
      : <Home />}
    </>  
  );

}

export default HomeContainer;