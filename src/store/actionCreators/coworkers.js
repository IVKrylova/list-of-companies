import { coworkersActionTypes } from '../actionTypes/coworkers';

export const getCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.GET_COWORKERS,
    payload: coworkers.map(coworker => {
      const row = JSON.parse(JSON.stringify(coworker));
      row.checked = false;

      return row;
    }),
  }
}

export const checkCoworker = (coworkers, coworker) => {
  return {
    type: coworkersActionTypes.CHECK_COWORKER,
    payload: coworkers.map(el => {

      if (el.id === coworker.id) el.checked = !el.checked;

      return el;
    }),
  }
}

export const checkAllCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.CHECK_ALL_COWORKERS,
    payload: coworkers.map(el => {
      el.checked = true;

      return el;
    }),
  }
}

export const uncheckAllCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.UNCHECK_ALL_COWORKERS,
    payload: coworkers.map(el => {
      el.checked = false;

      return el;
    }),
  }
}

export const addNewCoworkerToStore = (coworkers, coworker) => {
  return {
    type: coworkersActionTypes.ADD_NEW_COWORKER_TO_STORE,
    payload: [ ...coworkers, coworker ],
  }
}

export const deleteCoworkerFromStore = coworkers => {
  return {
    type: coworkersActionTypes.DELETE_COWORKER_FROM_STORE,
    payload: coworkers.filter(el => el.checked === false),
  }
}

export const updateCoworkers = (coworkers, coworker) => {
  return {
    type: coworkersActionTypes.UPDATE_COWORKERS,
    payload: coworkers.map(el => {
      if (el.id === coworker.id) {
        el.name = coworker.name;
        el.lastname = coworker.lastname;
        el.position = coworker.position;
      }

      return el;
    }),
  }
}
