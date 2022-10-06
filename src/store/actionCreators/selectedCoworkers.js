import { selectedCoworkersActionTypes } from '../actionTypes/selectedCoworkers';

// функция добавления сотрудников в массив по названию компании
export const addCoworkers = (selectedCoworkers, coworkers) => {
  return {
    type: selectedCoworkersActionTypes.ADD_COWORKERS,
    payload: [...selectedCoworkers, coworkers].flat(),
  }
}

// функция удаления сотрудников из массива по названию компании
export const deleteCoworkers = (selectedCoworkers, companie) => {
  return {
    type: selectedCoworkersActionTypes.DELETE_COWORKERS,
    payload: selectedCoworkers.filter(el => el.company !== companie.name),
  }
}
