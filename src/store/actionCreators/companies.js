import { companiesActionTypes } from '../actionTypes/companies';

export const getCompanies = companies => {
  return {
    type: companiesActionTypes.GET_COMPANIES,
    payload: companies.map(company => company),
  }
}

export const checkCompany = (companies, company) => {
  return {
    type: companiesActionTypes.CHECK_COMPANY,
    payload: companies.map(el => {
      if (el.id === company.id) el.checked = !el.checked;

      return el;
    }),
  }
}

export const checkAllCompanies = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = true;

      return el;
    }),
  }
}

export const uncheckAllCompanies = companies => {
  return {
    type: companiesActionTypes.CHECK_ALL_COMPANIES,
    payload: companies.map(el => {
      el.checked = false;

      return el;
    }),
  }
}

export const addNewCompanyToStore = (companies, company) => {
  return {
    type: companiesActionTypes.ADD_NEW_COMPANY_TO_COMPANIES,
    payload: [ ...companies, company ],
  }
}

export const deleteCompanyFromStore = companies => {
  return {
    type: companiesActionTypes.DELETE_COMPANY_FROM_STORE,
    payload: companies.filter(el => el.checked === false),
  }
}

export const updateCompany = (companies, company) => {
  return {
    type: companiesActionTypes.UPDATE_COMPANY,
    payload: companies.map(el => {
      if (el.id === company.id) {
        el.name = company.name;
        el.address = company.address;
      }

      return el;
    }),
  }
}
