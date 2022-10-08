import { updatingCoworkerActionTypes } from '../actionTypes/updatingCoworker';

const initialState = {
  id: null,
  name: '',
  lastname: '',
  position: '',
  company: '',
}

export const updatingCoworkerReduser = (state = initialState, action) => {
  switch(action.type) {
    case updatingCoworkerActionTypes.UPDATE_COWORKER:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}
