import { selectedCoworkersActionTypes } from '../actionTypes/selectedCoworkers';

const initialState = {
  selectedCoworkers: [],
}

export const selectedCoworkersReduser = (state = initialState, action) => {
  switch(action.type) {
    case selectedCoworkersActionTypes.ADD_COWORKERS:
      return {
        ...state,
        selectedCoworkers: action.payload,
      };
    case selectedCoworkersActionTypes.DELETE_COWORKERS:
      return {
        ...state,
        selectedCoworkers: action.payload,
      };
    case selectedCoworkersActionTypes.ADD_ALL_COWORKERS:
      return {
        ...state,
        selectedCoworkers: action.payload,
      };
    case selectedCoworkersActionTypes.DELETE_ALL_COWORKERS:
      return {
        ...state,
        selectedCoworkers: action.payload,
      };
    default:
      return state;
  }
}
