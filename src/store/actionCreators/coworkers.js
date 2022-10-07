import { coworkersActionTypes } from '../actionTypes/coworkers';

// функция получения списка сотрудников
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

// функция клика по чекбоксу
export const checkCoworker = (coworkers, coworker) => {
  return {
    type: coworkersActionTypes.CHECK_COWORKER,
    payload: coworkers.map(el => {
      if (el.id === coworker.id) el.checked = !el.checked;

      return el;
    }),
  }
}
