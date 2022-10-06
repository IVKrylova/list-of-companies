import { combineReducers } from 'redux';
import { companiesReducer } from './companiesReducer';
import { coworkersReducer } from './coworkersReduser';
import { checkedCompaniesReduser } from './checkedCompaniesReduser';

// общий редьюсер
export const rootReduser = combineReducers({
  companies: companiesReducer,
  coworkers: coworkersReducer,
  checkedCompanies: checkedCompaniesReduser,
});
