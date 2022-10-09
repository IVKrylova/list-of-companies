import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

// функция добавления компании в массив выбранных компаний
export const addCompanyToChecked = (companies, company) => {
  return {
    type: checkedCompaniesActionTypes.ADD_COMPANY,
    payload: [...companies, company],
  }
}

// функция удаления компании из массива выбранных компаний
export const deleteCompanyFromChecked = (companies, company) => {
  return {
    type: checkedCompaniesActionTypes.DELETE_COMPANY,
    payload: companies.filter(el => el.id !== company.id),
  }
}

// функция добавления всех компаний в массив выделенных
export const addAllCompaniesToChecked = companies => {
  return {
    type: checkedCompaniesActionTypes.ADD_ALL_COMPANIES,
    payload: companies,
  }
}

// функция удаления всех компаний из массива выделенных
export const deleteAllCompaniesFromChecked = _ => {
  return {
    type: checkedCompaniesActionTypes.DELETE_ALL_COMPANIES,
    payload: [],
  }
}
