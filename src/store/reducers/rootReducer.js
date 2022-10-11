import { combineReducers } from 'redux';
import { companiesReducer } from './companiesReducer';
import { coworkersReducer } from './coworkersReduser';
import { checkedCompaniesReduser } from './checkedCompaniesReduser';
import { selectedCoworkersReduser } from './selectedCoworkersReduser';
import { checkedCoworkersReduser } from './checkedCoworkersReduser';
import { updatingCompanyReduser } from './updatingCompanyReduser';
import { updatingCoworkerReduser } from './updatingCoworkerReduser';
import { newCompanyReducer } from './newCompanyReduser';
import { newCoworkerReducer } from './newCoworkerReduser';

export const rootReduser = combineReducers({
  companies: companiesReducer,
  coworkers: coworkersReducer,
  checkedCompanies: checkedCompaniesReduser,
  selectedCoworkers: selectedCoworkersReduser,
  checkedCoworkers: checkedCoworkersReduser,
  updatingCompany: updatingCompanyReduser,
  updatingCoworker: updatingCoworkerReduser,
  newCompany: newCompanyReducer,
  newCoworker: newCoworkerReducer,
});
