import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { mainApi } from '../../utils/MainApi';
import {
  getCompanies,
  checkCompanie,
  checkAllCompanie,
  uncheckAllCompanie,
} from '../../store/actionCreators/companies';
import {
  getCoworkers,
  checkCoworker,
} from '../../store/actionCreators/coworkers';
import {
  addCompanieToChecked,
  deleteCompanieFromChecked,
  addAllCompaniesToChecked,
  deleteAllCompaniesToChecked,
} from '../../store/actionCreators/checkedCompanies';
import {
  addCoworkers,
  deleteCoworkers,
  addAllCoworkers,
  deleteAllCoworkers,
} from '../../store/actionCreators/selectedCoworkers';
import {
  addCoworkerToChecked,
  deleteCoworkerFromChecked,
} from '../../store/actionCreators/checkedCoworkers';

const App = _ => {
  const dispatch = useDispatch();

  // получаем данные из store
  const companies = useSelector(store => store.companies.companies);
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);
  const coworkers = useSelector(store => store.coworkers.coworkers);
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const checkedCoworkers = useSelector(store => store.checkedCoworkers.checkedCoworkers);

  // получаем компании при загрузке страницы
  useEffect(_ => {
    mainApi.getCompanies()
      .then(res => {
        dispatch(getCompanies(res));
      })
      .catch(err => console.log(err))
  }, []);

  // получаем сотрудников при загрузке страницы
  useEffect(_ => {
    mainApi.getCoworkers()
      .then(res => {
        dispatch(getCoworkers(res));
      })
      .catch(err => console.log(err))
  }, []);

  // обработчик клика по чекбоксу компании
  const handleClickCheckboxCompanie = companie => {
    // устанавливаем флаг в чекбоксе
    dispatch(checkCompanie(companies, companie));
    // добавляем/удаляем компанию из выбранных
    if (companie.checked) {
      // добавляем компании в массив выбранных компаний
      dispatch(addCompanieToChecked(checkedCompanies, companie));
      // добавляем сотрудников в массив по названию компании
      dispatch(addCoworkers(selectedCoworkers, coworkers.filter(el => el.company === companie.name)));
    } else {
      // удаляем компании из массива выбранных компаний
      dispatch(deleteCompanieFromChecked(checkedCompanies, companie));
      // удаляем сотрудников из массива по названию компании
      dispatch(deleteCoworkers(selectedCoworkers, companie));
    }
  }

  // обработчик клика по чекбоксу сотрудника
  const handleClickCheckboxCoworker = coworker => {
    // переключаем флаг в чекбоксе
    dispatch(checkCoworker(selectedCoworkers, coworker));
    // добавляем/удаляем сотрудников из выбранных
    if (coworker.checked) {
      // добавляем сотрудников в массив выбранных
      dispatch(addCoworkerToChecked(checkedCoworkers, coworker));
    } else {
      // удаляем сотрудников из массива выбранных компаний
      dispatch(deleteCoworkerFromChecked(checkedCoworkers, coworker));
    }
  }

  // обработчик клика по чекбоксу в шапке таблицы компаний
  const handleClickCheckboxAllCompanies = tableName => {
    if (tableName === 'companies' && checkedCompanies.length !== companies.length) {
      // добавляем компании в массив выбранных
      dispatch(addAllCompaniesToChecked(companies));
      // устанавливаем флаг в чекбоксе
      dispatch(checkAllCompanie(companies));
      // показываем массив с сотрудниками
      dispatch(addAllCoworkers(coworkers))
    }
    if (tableName === 'companies' && checkedCompanies.length === companies.length) {
      // удаляем компании из массива выбранных
      dispatch(deleteAllCompaniesToChecked(companies));
      // удаляем флаг в чекбоксе
      dispatch(uncheckAllCompanie(companies));
      // очищаем массив с сотрудниками
      dispatch(deleteAllCoworkers(coworkers));
    }
  }

  return (
    <div className="App">
      <Header />
      <Main
        onClickCheckboxCompanie={handleClickCheckboxCompanie}
        onClickCheckboxCoworker={handleClickCheckboxCoworker}
        onClickCheckboxAllCompanies={handleClickCheckboxAllCompanies}
      />
      <Footer />
    </div>
  );
}

export default App;
