import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

const initialState = {
  checkedCompanies: [],
}

export const checkedCompaniesReduser = (state = initialState, action) => {
  switch(action.type) {
    case checkedCompaniesActionTypes.ADD_COMPANY:
      return {
        ...state,
        checkedCompanies: action.payload,
      };
    case checkedCompaniesActionTypes.DELETE_COMPANY:
      return {
        ...state,
        checkedCompanies: action.payload,
      };
    case checkedCompaniesActionTypes.ADD_ALL_COMPANIES:
      return {
        ...state,
        checkedCompanies: action.payload,
      };
      case checkedCompaniesActionTypes.DELETE_ALL_COMPANIES:
      return {
        ...state,
        checkedCompanies: action.payload,
      };
    default:
      return state;
  }
}
