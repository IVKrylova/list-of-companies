import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { mainApi } from '../../utils/MainApi';
import { getCompanies } from '../../store/actionCreators/companies';
import { getCoworkers } from '../../store/actionCreators/coworkers';

const App = _ => {
  const dispatch = useDispatch();

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

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
