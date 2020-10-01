import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import HomeContainer from "./HomeContainer";



/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes
 *  PARENT: Routes
 *  CHILDREN:
 */

function Routes() {


  return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
  );

}

export default Routes;