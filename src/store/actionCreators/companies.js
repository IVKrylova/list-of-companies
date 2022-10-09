import { companiesActionTypes } from '../actionTypes/companies';

// функция получения списка компаний
export const getCompanies = companies => {
  return {
    type: companiesActionTypes.GET_COMPANIES,
    payload: companies.map(company => {
      const row = JSON.parse(JSON.stringify(company));
      row.checked = false;

      return row;
    }),
  }
}

// функция клика по чекбоксу
export const checkCompany = (companies, company) => {
  return {
    type: companiesActionTypes.CHECK_COMPANY,
    payload: companies.map(el => {
      if (el.id === company.id) el.checked = !el.checked;

      return el;
    }),
  }
}

// функция установки флажка в чекбоксе для всех компаний
export const checkAllCompanies = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = true;

      return el;
    }),
  }
}

// функция снятия флажка в чекбоксе для всех компаний
export const uncheckAllCompanies = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = false;

      return el;
    }),
  }
}

// функция добавления новой компании
export const addNewCompanyToStore = (companies, company) => {
  return {
    type: companiesActionTypes.ADD_NEW_COMPANY_TO_COMPANIES,
    payload: [ ...companies, company ],
  }
}

// функция удаления компании
export const deleteCompanyFromStore = (companies) => {
  return {
    type: companiesActionTypes.DELETE_COMPANY_FROM_STORE,
    payload: companies.filter(el => el.checked === false),
  }
}
