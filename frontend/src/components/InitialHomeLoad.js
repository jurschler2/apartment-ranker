import React from "react";
import HomeDemo from "./HomeDemo";

/**
 *  DESCRIPTION: Component that contains information for a session's initial visit to the site. Renders the HomeDemo component containing the GIF and ability for session to
 *               generate a valid token.
 *  PROPS: moveToNext (Function)
 *  FLOW: App => Routes => HomeContainer => InitialHomeLoad
 *  PARENT: HomeContainer
 *  CHILDREN: HomeDemo
 */

function InitialHomeLoad({ moveToNext }) {

  return (
    <div>
      <div>
        <h3>
          Welcome to Apartment Ranker!
        </h3>
        <h5>
          Visually compare and find your next apartment!
        </h5>
      </div>
      <div>
        <HomeDemo moveToNext={moveToNext}/>
      </div>
    </div>
  );
}

export default InitialHomeLoad;