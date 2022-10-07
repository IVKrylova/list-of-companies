import { companiesActionTypes } from '../actionTypes/companies';

// функция получения списка компаний
export const getCompanies = companies => {
  return {
    type: companiesActionTypes.GET_COMPANIES,
    payload: companies.map(companie => {
      const row = JSON.parse(JSON.stringify(companie));
      row.checked = false;

      return row;
    }),
  }
}

// функция клика по чекбоксу
export const checkCompanie = (companies, companie) => {
  return {
    type: companiesActionTypes.CHECK_COMPANIE,
    payload: companies.map(el => {
      if (el.id === companie.id) el.checked = !el.checked;

      return el;
    }),
  }
}

// функция установки флажка в чекбоксе для всех компаний
export const checkAllCompanie = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = true;

      return el;
    }),
  }
}

// функция снятия флажка в чекбоксе для всех компаний
export const uncheckAllCompanie = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = false;

      return el;
    }),
  }
}
