import { ADD_APARTMENT, LOAD_APARTMENTS } from "./actionTypes";

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

        case LOAD_APARTMENTS:
          draft.apartments = action.apartments;
          break;

        default:
          return draft;  
      }
    });

export default rootReducer;