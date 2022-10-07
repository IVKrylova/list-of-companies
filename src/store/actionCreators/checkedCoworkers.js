import { checkedCoworkersActionTypes } from '../actionTypes/checkedCoworkers';

// функция добавления сотрудника в массив выбранных сотрудников
export const addCoworkerToChecked = (checkedCoworkers, coworker) => {
  return {
    type: checkedCoworkersActionTypes.ADD_COWORKER,
    payload: [...checkedCoworkers, coworker],
  }
}

// функция удаления сотрудника из массива выбранных сотрудников
export const deleteCoworkerFromChecked = (checkedCoworkers, coworker) => {
  return {
    type: checkedCoworkersActionTypes.DELETE_COWORKER,
    payload: checkedCoworkers.filter(el => el.id !== coworker.id),
  }
}
