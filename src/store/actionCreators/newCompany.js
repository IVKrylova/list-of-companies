import { newCompanyActionTypes } from '../actionTypes/newCompany';

// функция добавления новой компании в store для новых компаний
export const addCompany = company => {
  return {
    type: newCompanyActionTypes.ADD_NEW_COMPANY,
    payload: {
      name: company.name,
      address: company.address,
    }
  }
}
