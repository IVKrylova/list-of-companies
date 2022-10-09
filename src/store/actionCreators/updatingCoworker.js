import { updatingCoworkerActionTypes } from '../actionTypes/updatingCoworker';

// функция обновления данных сотрудника
export const updateCoworker = data => {
  return {
    type: updatingCoworkerActionTypes.UPDATE_COWORKER,
    payload: {
      id: data.id,
      lastname: data.lastname,
      name: data.name,
      position: data.position,
      company: data.company,
    }
  }
}

