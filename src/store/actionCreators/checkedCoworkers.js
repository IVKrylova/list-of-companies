import { checkedCoworkersActionTypes } from '../actionTypes/checkedCoworkers';

export const addCoworkerToChecked = (checkedCoworkers, coworker) => {
  return {
    type: checkedCoworkersActionTypes.ADD_COWORKER,
    payload: [...checkedCoworkers, coworker],
  }
}

export const deleteCoworkerFromChecked = (checkedCoworkers, coworker) => {
  return {
    type: checkedCoworkersActionTypes.DELETE_COWORKER,
    payload: checkedCoworkers.filter(el => el.id !== coworker.id),
  }
}

export const addAllCoworkersToChecked = coworkers => {
  return {
    type: checkedCoworkersActionTypes.ADD_ALL_CHECKED_COWORKERS,
    payload: coworkers,
  }
}

export const deleteAllCoworkersFromChecked = _ => {
  return {
    type: checkedCoworkersActionTypes.DELETE_ALL_CHECKED_COWORKERS,
    payload: [],
  }
}
