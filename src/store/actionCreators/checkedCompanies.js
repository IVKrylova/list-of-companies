import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

// функция добавления компании в массива выбранных компаний
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
