import { checkedCompaniesActionTypes } from '../actionTypes/checkedCompanies';

// функция добавления компании в массив выбранных компаний
export const addCompanieToChecked = (companies, companie) => {
  return {
    type: checkedCompaniesActionTypes.ADD_COMPANIE,
    payload: [...companies, companie],
  }
}
