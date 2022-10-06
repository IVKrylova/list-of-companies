import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { mainApi } from '../../utils/MainApi';
import { getCompanies } from '../../store/actionCreators/companies';
import { getCoworkers } from '../../store/actionCreators/coworkers';
import { checkCompanie } from '../../store/actionCreators/companies';
import { addCompanieToChecked, deleteCompanieFromChecked } from '../../store/actionCreators/checkedCompanies';


const App = _ => {
  const dispatch = useDispatch();
  // получаем данные из store
  const companies = useSelector(store => store.companies.companies);
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);

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
    companie.checked
      ? dispatch(addCompanieToChecked(checkedCompanies, companie))
      : dispatch(deleteCompanieFromChecked(checkedCompanies, companie));
  }

  return (
    <div className="App">
      <Header />
      <Main
        onClickCheckboxCompanie={handleClickCheckboxCompanie}
      />
      <Footer />
    </div>
  );
}

export default App;
