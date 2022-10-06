import { companiesActionTypes } from '../actionTypes/companies';

const initialState = {
  companies: [],
}

export const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case companiesActionTypes.GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
}
