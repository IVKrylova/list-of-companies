import { newCompanyActionTypes } from '../actionTypes/newCompany';

// функция получения списка компаний
export const addCompany = company => {
  return {
    type: newCompanyActionTypes.ADD_NEW_COMPANY,
    payload: {
      name: company.name,
      address: company.address,
    }
  }
}
