import { ADD_APARTMENT, LOAD_APARTMENTS, UPDATE_RANKINGS } from "./actionTypes";

import produce from "immer";

/**
 *  state = {}
 */

 const INITIAL_STATE = {apartments: []};

 const rootReducer = (state=INITIAL_STATE, action) =>
    produce(state, draft => {
      switch (action.type) {

        case ADD_APARTMENT:
          draft.apartments[action.apartment_url] = action.apartment;
          break;

        case LOAD_APARTMENTS:
          draft.apartments = action.apartments;
          break;

        case UPDATE_RANKINGS:
          draft.apartments[action.rankings.r_apartment_url].apartment_rankings = {... draft.apartments[action.rankings.r_apartment_url].apartment_rankings, ... action.rankings};
          break;

        default:
          return draft;  
      }
    });

export default rootReducer;