import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomeContainer from "./HomeContainer";
import { verifyToken } from "../helpers/auth";
import useAPI from "../helpers/useAPI";



/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes
 *  PARENT: Routes
 *  CHILDREN:
 */

function Routes() {
  const [isLoading, error] = useAPI(verifyToken);

  // if (isLoading) {
  //   return <p>Loading</p>;
  // }

  let user;

  if (error) {
    user = false;
  } else {
    user = true;
  }


// TODO: Move the useAPI call for token verification to here and render the initial load items above
// the switch below?

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomeContainer user={user}/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
  );

}

export default Routes;