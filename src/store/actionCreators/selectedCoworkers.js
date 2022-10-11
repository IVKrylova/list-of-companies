import { selectedCoworkersActionTypes } from '../actionTypes/selectedCoworkers';

export const addCoworkers = (selectedCoworkers, coworkers) => {
  return {
    type: selectedCoworkersActionTypes.ADD_COWORKERS,
    payload: [...selectedCoworkers, coworkers].flat(),
  }
}

export const deleteCoworkers = (selectedCoworkers, companie) => {
  return {
    type: selectedCoworkersActionTypes.DELETE_COWORKERS,
    payload: selectedCoworkers.filter(el => el.company !== companie.name),
  }
}

export const addAllCoworkers = coworkers => {
  return {
    type: selectedCoworkersActionTypes.ADD_ALL_COWORKERS,
    payload: coworkers,
  }
}

export const deleteAllCoworkers = _ => {
  return {
    type: selectedCoworkersActionTypes.DELETE_ALL_COWORKERS,
    payload: [],
  }
}

export const addNewCoworkerToTable = (coworkers, coworker) => {
  return {
    type: selectedCoworkersActionTypes.ADD_COWORKER_TO_TABLE,
    payload: [ ...coworkers, coworker ],
  }
}

export const deleteCoworkersFromTable = coworkers => {
  return {
    type: selectedCoworkersActionTypes.DELETE_COWORKES_FROM_TABLE,
    payload: coworkers.filter(el => el.checked === false),
  }
}
