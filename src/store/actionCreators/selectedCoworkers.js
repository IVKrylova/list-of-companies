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

// функция добавления всех сотрудников в массив
export const addAllCoworkers = coworkers => {
  return {
    type: selectedCoworkersActionTypes.ADD_ALL_COWORKERS,
    payload: coworkers,
  }
}

// функция удаления всех сотрудников из массива
export const deleteAllCoworkers = _ => {
  return {
    type: selectedCoworkersActionTypes.DELETE_ALL_COWORKERS,
    payload: [],
  }
}

// функция добавления нового сотрудника в таблицу
export const addNewCoworkerToTable = (coworkers, coworker) => {
  return {
    type: selectedCoworkersActionTypes.ADD_COWORKER_TO_TABLE,
    payload: [ ...coworkers, coworker ],
  }
}

//функция удаления сотрудников из таблицы
export const deleteCoworkersFromTable = coworkers => {
  return {
    type: selectedCoworkersActionTypes.DELETE_COWORKES_FROM_TABLE,
    payload: coworkers.filter(el => el.checked === false),
  }
}
