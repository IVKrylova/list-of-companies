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
  addNewCompanyToStore,
  deleteCompanyFromStore,
} from '../../store/actionCreators/companies';
import {
  getCoworkers,
  checkCoworker,
  checkAllCoworkers,
  uncheckAllCoworkers,
  addNewCoworkerToStore,
  deleteCoworkerFromStore,
} from '../../store/actionCreators/coworkers';
import {
  addCompanieToChecked,
  deleteCompanieFromChecked,
  addAllCompaniesToChecked,
  deleteAllCompaniesFromChecked,
} from '../../store/actionCreators/checkedCompanies';
import {
  addCoworkers,
  deleteCoworkers,
  addAllCoworkers,
  deleteAllCoworkers,
  addNewCoworkerToTable,
  deleteCoworkersFromTable,
} from '../../store/actionCreators/selectedCoworkers';
import {
  addCoworkerToChecked,
  deleteCoworkerFromChecked,
  addAllCoworkersToChecked,
  deleteAllCoworkersFromChecked,
} from '../../store/actionCreators/checkedCoworkers';

const App = _ => {
  // получаем данные из store
  const companies = useSelector(store => store.companies.companies);
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);
  const coworkers = useSelector(store => store.coworkers.coworkers);
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const checkedCoworkers = useSelector(store => store.checkedCoworkers.checkedCoworkers);
  const updatingCompany = useSelector(store => store.updatingCompany.data);
  const updatingCoworker = useSelector(store => store.updatingCoworker.data);
  const newCompany = useSelector(store => store.newCompany.company);
  const newCoworker = useSelector(store => store.newCoworker.coworker);

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
    dispatch(checkCoworker(coworkers, coworker));
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
  const handleClickCheckboxAllCompanies = isChecked => {
    if (!isChecked) {
      // добавляем компании в массив выбранных
      dispatch(addAllCompaniesToChecked(companies));
      // устанавливаем флаг в чекбоксе
      dispatch(checkAllCompanie(companies));
      // показываем массив с сотрудниками
      dispatch(addAllCoworkers(coworkers))
    }
    if (isChecked) {
      // удаляем компании из массива выбранных
      dispatch(deleteAllCompaniesFromChecked(companies));
      // удаляем флаг в чекбоксе
      dispatch(uncheckAllCompanie(companies));
      // очищаем массив с сотрудниками
      dispatch(deleteAllCoworkers(coworkers));
    }
  }

  // обработчик клика по чекбоксу в шапке таблицы сотрудников
  const handleClickCheckboxAllCoworkers = isChecked => {
    if (!isChecked) {
      // устанавливаем флаг в чекбоксе
      dispatch(checkAllCoworkers(coworkers));
      // добавляем сотрудников в массив выбранных
      dispatch(addAllCoworkersToChecked(selectedCoworkers));
    }
    if (isChecked) {
      // удаляем флаг в чекбоксе
      dispatch(uncheckAllCoworkers(coworkers));
      // удаляем сотрудников из массива выбранных
      dispatch(deleteAllCoworkersFromChecked(checkedCoworkers));
    }
  }

  // обработчик изменения данных в таблице компаний
  const handleUpdateCompany = evt => {
    evt.preventDefault();

    mainApi.updateCompanie(updatingCompany)
      .then(_ => {
        mainApi.getCompanies()
          .then(res => dispatch(getCompanies(res)))
      })
      .catch(err => console.log(err));
  }

  // обработчик изменения данных в таблице сотрудников
  const handleUpdateCoworker = evt => {
    evt.preventDefault();

    mainApi.updateCoworker(updatingCoworker)
      .then(_ => {
        mainApi.getCoworkers()
          .then(res => dispatch(getCoworkers(res)))
      })
      .catch(err => console.log(err));
  }

  // обработчик добавления новой компании
  const handleAddNewCompany = evt => {
    evt.preventDefault();

    mainApi.addCompany(newCompany)
      .then(res => {
        res.checked = false;
        dispatch(addNewCompanyToStore(companies, res));
      })
      .catch(err => console.log(err));
  }

  // обработчик добавления нового сотрудника
  const handleAddNewCoworker = evt => {
    evt.preventDefault();

    mainApi.addCoworker(newCoworker)
      .then(res => {
        res.checked = false;

        dispatch(addNewCoworkerToStore(coworkers, res));
        if (selectedCoworkers.some(el => el.company === res.company))
          dispatch(addNewCoworkerToTable(selectedCoworkers, res));
      })
      .catch(err => console.log(err));
  }

  // обработчик удаления компании
  const handleClickDeleteCompany = _ => {
    checkedCompanies.forEach(el => {
      mainApi.deleteCompany(el.id).catch(err => console.log(err));
    });

    // удаляем компании из таблицы
    dispatch(deleteCompanyFromStore(companies));

    // удаляем сотрудников из удаленных компаний
    checkedCompanies.forEach(el => {
      coworkers.forEach(coworker => {
        if (el.name === coworker.company) {
          mainApi.deleteCoworker(coworker.id).catch(err => console.log(err));
        }
      })
    })

    // удаляем компании из массива выбранных
    dispatch(deleteAllCompaniesFromChecked(companies));
    // удаляем сотрудников из таблицы
    dispatch(deleteAllCoworkers(coworkers));
  }

  // обработчик удаления сотрудника
  const handleClickDeleteCoworker = _ => {
    checkedCoworkers.forEach(el => {
      mainApi.deleteCoworker(el.id).catch(err => console.log(err));
    });

    // удаляем сотрудников из store
    dispatch(deleteCoworkerFromStore(coworkers));
    // очищаем массив выбранных сотрудников
    dispatch(deleteAllCoworkersFromChecked(selectedCoworkers));
    // удаляем сотрудников из таблицы
    dispatch(deleteCoworkersFromTable(selectedCoworkers));
  }

  return (
    <div className="App">
      <Header />
      <Main
        onClickCheckboxCompanie={handleClickCheckboxCompanie}
        onClickCheckboxCoworker={handleClickCheckboxCoworker}
        onClickCheckboxAllCompanies={handleClickCheckboxAllCompanies}
        onClickCheckboxAllCoworkers={handleClickCheckboxAllCoworkers}
        onUpdateCompany={handleUpdateCompany}
        onUpdateCoworker={handleUpdateCoworker}
        addNewCompany={handleAddNewCompany}
        addNewCoworker={handleAddNewCoworker}
        onClickDeleteCompany={handleClickDeleteCompany}
        onClickDeleteCoworker={handleClickDeleteCoworker}
      />
      <Footer />
    </div>
  );
}

export default App;
