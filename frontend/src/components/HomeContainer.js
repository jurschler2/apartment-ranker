import React, { useEffect, useState } from "react";
import { checkToken, verifyToken, generateToken } from "../helpers/auth";
import useAPI from "../helpers/useAPI";
import InitialHomeLoad from "./InitialHomeLoad";
import Home from "./Home";

/**
 *  DESCRIPTION: Container component to hold a new session's workflow and an existing user's home page whether the browser possesses a verified token.
 *  PROPS: createdUser (Boolean)
 *  FLOW: App => Routes => HomeContainer
 *  PARENT: Routes
 *  CHILDREN: InitialHomeLoad, Home
 */


function HomeContainer({ createdUser }) {

  // A state object for whether a token exists; This really only comes into play when a new session
  // for either a new or existing user needs to generate a token for browser.
  const [haveToken, setHaveToken] = useState(false)


  // Function to handle the generation of token at the end of a new session's workflow
  // Passed as props to InitialHomeLoad and subsequently to HomeDemo therein.

  const handleMoveToNext = async () => {

    await generateToken();
    setHaveToken(true);

  }

  return (
    <>
    {(!haveToken && !createdUser)
      ? <InitialHomeLoad moveToNext={handleMoveToNext} />
      : <Home />}
    </>  
  );

}

export default HomeContainer;