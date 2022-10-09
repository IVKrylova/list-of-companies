import { updatingCompanyActionTypes } from '../actionTypes/updatingCompany';

// функция обновления данных компании
export const updateCompany = data => {
  return {
    type: updatingCompanyActionTypes.UPDATE_COMPANY,
    payload: {
      address: data.address,
      name: data.name,
      id: data.id,
    }
  }
}
