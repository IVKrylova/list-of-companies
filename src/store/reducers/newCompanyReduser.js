import { newCompanyActionTypes } from '../actionTypes/newCompany';

const initialState = {
  name: '',
  address: '',
}

export const newCompanyReducer = (state = initialState, action) => {
  switch(action.type) {
    case newCompanyActionTypes.ADD_NEW_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    default:
      return state;
  }
}
