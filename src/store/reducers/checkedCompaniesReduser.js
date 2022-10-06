import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

const initialState = {
  checkedCompanies: [],
}

export const checkedCompaniesReduser = (state = initialState, action) => {
  switch(action.type) {
    case checkedCompaniesActionTypes.ADD_COMPANIE:
      return {
        ...state,
        checkedCompanies: action.payload,
      };
    default:
      return state;
  }
}
