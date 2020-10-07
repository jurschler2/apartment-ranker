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


// TODO: Move the useAPI call for token verification to here and render the initial load items above
// the switch below?

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