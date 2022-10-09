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
    case companiesActionTypes.CHECK_COMPANIE:
      return {
        ...state,
        companies: action.payload,
      };
    case companiesActionTypes.CHECK_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case companiesActionTypes.UNCHECK_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case companiesActionTypes.ADD_NEW_COMPANY_TO_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      }
    case companiesActionTypes.DELETE_COMPANY_FROM_STORE:
      return {
        ...state,
        companies: action.payload,
      }
    default:
      return state;
  }
}
