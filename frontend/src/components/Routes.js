import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";



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
            <Home />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
  );

}

export default Routes;