import { ADD_APARTMENT } from "./actionTypes";

import produce from "immer";

/**
 *  state = {}
 */

 const INITIAL_STATE = {apartments: {}};

 const rootReducer = (state=INITIAL_STATE, action) =>
    produce(state, draft => {
      switch (action.type) {

        // case ADD_APARTMENT:
        //   draft.apartments[action.url]

        default:
          return draft;  
      }
    });

export default rootReducer;