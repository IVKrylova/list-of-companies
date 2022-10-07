import { checkedCoworkersActionTypes } from '../actionTypes/checkedCoworkers';

const initialState = {
  checkedCoworkers: [],
}

export const checkedCoworkersReduser = (state = initialState, action) => {
  switch(action.type) {
    case checkedCoworkersActionTypes.ADD_COWORKER:
      return {
        ...state,
        checkedCoworkers: action.payload,
      };
    case checkedCoworkersActionTypes.DELETE_COWORKER:
      return {
        ...state,
        checkedCoworkers: action.payload,
      };
    default:
      return state;
  }
}
