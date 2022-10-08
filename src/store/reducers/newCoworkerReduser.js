import { newCoworkerActionTypes } from '../actionTypes/newCoworker';

const initialState = {
  lastname: '',
  company: '',
  position: '',
  name: '',
}

export const newCoworkerReducer = (state = initialState, action) => {
  switch(action.type) {
    case newCoworkerActionTypes.ADD_NEW_COWORKER:
      return {
        ...state,
        coworker: action.payload,
      };
    default:
      return state;
  }
}
