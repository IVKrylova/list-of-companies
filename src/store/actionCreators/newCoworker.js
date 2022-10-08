import { newCoworkerActionTypes } from '../actionTypes/newCoworker';

// функция добавления новой компании в store для новых компаний
export const addNewCoworker = coworker => {
  return {
    type: newCoworkerActionTypes.ADD_NEW_COWORKER,
    payload: {
      name: coworker.name,
      lastname: coworker.lastname,
      company: coworker.company,
      position: coworker.position,
    }
  }
}
