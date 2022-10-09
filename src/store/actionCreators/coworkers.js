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

// функция установки флажка в чекбокс "Выделить всё"
export const checkAllCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.CHECK_ALL_COWORKERS,
    payload: coworkers.map(el => {
      el.checked = true;

      return el;
    }),
  }
}

// функция удаления флажка в чекбоксе "Выделить всё"
export const uncheckAllCoworkers = coworkers => {
  return {
    type: coworkersActionTypes.UNCHECK_ALL_COWORKERS,
    payload: coworkers.map(el => {
      el.checked = false;

      return el;
    }),
  }
}

// функция добавления нового сотрудника
export const addNewCoworkerToStore = (coworkers, coworker) => {
  return {
    type: coworkersActionTypes.ADD_NEW_COWORKER_TO_STORE,
    payload: [ ...coworkers, coworker ],
  }
}

// функция удаления компании
export const deleteCoworkerFromStore = coworkers => {
  return {
    type: coworkersActionTypes.DELETE_COWORKER_FROM_STORE,
    payload: coworkers.filter(el => el.checked === false),
  }
}
