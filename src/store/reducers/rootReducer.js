import { combineReducers } from 'redux';
import { companiesReducer } from './companiesReducer';
import { coworkersReducer } from './coworkersReduser';

// общий редьюсер
export const rootReduser = combineReducers({
  companies: companiesReducer,
  coworkers: coworkersReducer,
});
