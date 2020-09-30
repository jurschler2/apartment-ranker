import React, { useEffect } from "react";
import { generateToken } from "../helpers/auth";
import HomeDemo from "./HomeDemo";

function InitialHomeLoad() {



  useEffect(
    async function createOrFindUser() {
      await generateToken();
    }, []
  )

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
        <HomeDemo />
      </div>
    </div>
  );

}

export default InitialHomeLoad;