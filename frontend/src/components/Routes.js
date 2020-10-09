import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomeContainer from "./HomeContainer";
import { verifyToken } from "../helpers/auth";
import useAPI from "../helpers/useAPI";

/**
 *  DESCRIPTION: Component which contains the routes to be rendered in the application. Provides a boolean of whether a user has been verified to the HomeContainer
 *               component to assist with rendering decisions further in the application.
 *  PROPS: N/A
 *  FLOW: App => Routes
 *  PARENT: App
 *  CHILDREN: HomeContainer
 */

function Routes() {
  const [isLoading, error] = useAPI(verifyToken);

  let user;

  if (error) {
    user = false;
  } else {
    user = true;
  }

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomeContainer createdUser={user}/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
  );

}

export default Routes;