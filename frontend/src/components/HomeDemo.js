import React from "react";

/**
 *  DESCRIPTION: Component that renders a GIF showing how to use the site. Contains a button which invokes the creation of a token.
 *  PROPS: moveToNext (Function)
 *  FLOW: App => Routes => HomeContainer => InitialHomeLoad => HomeDemo
 *  PARENT: InitialHomeLoad
 *  CHILDREN: N/A
 */

function HomeDemo({ moveToNext }) {

  return (
    <div>
      <p>
        How it works:
      </p>
      <div>
        * insert GIF here *
      </div>
      <div className="tryItButton">
        <button type="button" onClick={moveToNext}>
          <span>
          Try it
          </span>
        </button>
        </div>
    </div>
  );

}

export default HomeDemo;