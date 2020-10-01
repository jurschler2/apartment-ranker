import React from "react";
import {Button} from "react-bootstrap";

function HomeDemo({ moveToNext }) {

  return (
    <div>
      <p>
        How it works:
      </p>
      <div>
        * insert GIF here *
      </div>
      <button type="button" onClick={moveToNext}>Try it</button>
    </div>
  );

}

export default HomeDemo;