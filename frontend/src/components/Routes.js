import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomeContainer from "./HomeContainer";
import { verifyToken } from "../helpers/auth";
import useAPI from "../helpers/useAPI";



/**
 *  DESCRIPTION:
 *  PROPS: None
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