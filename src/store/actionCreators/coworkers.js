import { coworkersActionTypes } from '../actionTypes/coworkers';

export const getCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.GET_COWORKERS,
    payload: coworkers,
  }
}
