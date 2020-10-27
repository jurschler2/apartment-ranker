import React from "react";
import HomeDemo from "./HomeDemo";
import { Row, Col, Container } from "react-bootstrap";

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
        <div className="welcome-tagline">
          <h5>
            Visually compare and find your next apartment!
          </h5>
        </div>
   <Container className="sectionContainer">
      <div>
        <HomeDemo moveToNext={moveToNext}/>
      </div>
   </Container>
    </div>
  );
}

export default InitialHomeLoad;