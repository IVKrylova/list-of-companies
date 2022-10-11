import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

export const addCompanyToChecked = (companies, company) => {
  return {
    type: checkedCompaniesActionTypes.ADD_COMPANY,
    payload: [...companies, company],
  }
}

export const deleteCompanyFromChecked = (companies, company) => {
  return {
    type: checkedCompaniesActionTypes.DELETE_COMPANY,
    payload: companies.filter(el => el.id !== company.id),
  }
}

export const addAllCompaniesToChecked = companies => {
  return {
    type: checkedCompaniesActionTypes.ADD_ALL_COMPANIES,
    payload: companies,
  }
}

export const deleteAllCompaniesFromChecked = _ => {
  return {
    type: checkedCompaniesActionTypes.DELETE_ALL_COMPANIES,
    payload: [],
  }
}
