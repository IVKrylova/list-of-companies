import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

// функция добавления компании в массив выбранных компаний
export const addCompanieToChecked = (companies, companie) => {
  return {
    type: checkedCompaniesActionTypes.ADD_COMPANIE,
    payload: [...companies, companie],
  }
}

// функция удаления компании из массива выбранных компаний
export const deleteCompanieFromChecked = (companies, companie) => {
  return {
    type: checkedCompaniesActionTypes.DELETE_COMPANIE,
    payload: companies.filter(el => el.id !== companie.id),
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
export const deleteAllCompaniesFromChecked = companies => {
  return {
    type: checkedCompaniesActionTypes.DELETE_ALL_COMPANIES,
    payload: [],
  }
}
