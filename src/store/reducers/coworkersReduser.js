import { coworkersActionTypes } from '../actionTypes/coworkers';

const initialState = {
  coworkers: [],
}

export const coworkersReducer = (state = initialState, action) => {
  switch(action.type) {
    case coworkersActionTypes.GET_COWORKERS:
      return {
        ...state,
        coworkers: action.payload,
      };
      case coworkersActionTypes.CHECK_COWORKER:
        return {
          ...state,
          coworkers: action.payload,
        };
      case coworkersActionTypes.CHECK_ALL_COWORKER:
        return {
          ...state,
          coworkers: action.payload,
        };
      case coworkersActionTypes.UNCHECK_ALL_COWORKER:
        return {
          ...state,
          coworkers: action.payload,
      };
    default:
      return state;
  }
}
