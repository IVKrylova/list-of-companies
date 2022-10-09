import { updatingCompanyActionTypes } from '../actionTypes/updatingCompany';

const initialState = {
  id: null,
  name: '',
  address: '',
}

export const updatingCompanyReduser = (state = initialState, action) => {
  switch(action.type) {
    case updatingCompanyActionTypes.UPDATE_COMPANY:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}
