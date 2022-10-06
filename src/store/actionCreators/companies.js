import { companiesActionTypes } from '../actionTypes/companies';

export const getCompanies = companies => {
  return {
    type: companiesActionTypes.GET_COMPANIES,
    payload: companies,
  }
}
