import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { mainApi } from '../../utils/MainApi';
import {
  getCompanies,
  checkCompany,
  checkAllCompanies,
  uncheckAllCompanies,
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
  addCompanyToChecked,
  deleteCompanyFromChecked,
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

  // стейты для бесконечного скролла
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  // обработчик скролла страницы
  const handleScroll = _ => {
    // высота документа
    const documentHeight = document.body.offsetHeight;
    // высота экрана
    const screenHeight = window.innerHeight;
    // величина скролла
    const scroll = window.scrollY;
    // лимит, после которого подгружаются данные
    const limit = documentHeight - screenHeight / 5;
    // позиция низа экрана относительно страницы
    const position = scroll + screenHeight;

    if (position >= limit && companies.length <= totalCount) {
      setFetching(true);
    }
  }

  // улучшаем производительность
  const throttle = (callee, timeout) => {
    let timer = null;

    return function perform(...args) {
      if (timer) return;

      timer = setTimeout(_ => {
        callee(...args);
        clearTimeout(timer);
        timer = null;
      }, timeout)
    }
  }
  const optimizedHandlerScroll = throttle(handleScroll, 250);

  // вешаем обработчик скролла на документ
  useEffect(_ => {
    document.addEventListener('scroll', optimizedHandlerScroll);

    return function() {
      document.removeEventListener('scroll', optimizedHandlerScroll);
    }
  }, []);

  // получаем компании при загрузке страницы
  useEffect(_ => {
    if (fetching) {
      mainApi.getCompanies(currentPage)
      .then(res => {
        setTotalCount(res.headerTotalCount);
        return res.res;
      })
        .then(res => {
          dispatch(getCompanies([...companies, ...res].flat()));
          setCurrentPage(currentPage + 1);
        })
        .catch(err => console.log(err))
        .finally(_ => setFetching(false));
    }
  }, [fetching]);

  // получаем сотрудников при загрузке страницы
  useEffect(_ => {
    mainApi.getCoworkers()
      .then(res => dispatch(getCoworkers(res)))
      .catch(err => console.log(err))
  }, []);

  // обработчик клика по чекбоксу компании
  const handleClickCheckboxCompany = company => {
    // устанавливаем флаг в чекбоксе
    dispatch(checkCompany(companies, company));
    // добавляем/удаляем компанию из выбранных
    if (company.checked) {
      // добавляем компании в массив выбранных компаний
      dispatch(addCompanyToChecked(checkedCompanies, company));
      // добавляем сотрудников в массив по названию компании
      dispatch(addCoworkers(selectedCoworkers, coworkers.filter(el => el.company === company.name)));
    } else {
      // удаляем компании из массива выбранных компаний
      dispatch(deleteCompanyFromChecked(checkedCompanies, company));
      // удаляем сотрудников из массива по названию компании
      dispatch(deleteCoworkers(selectedCoworkers, company));
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
      dispatch(checkAllCompanies(companies));
      // показываем массив с сотрудниками
      dispatch(addAllCoworkers(coworkers))
    }
    if (isChecked) {
      // удаляем компании из массива выбранных
      dispatch(deleteAllCompaniesFromChecked());
      // удаляем флаг в чекбоксе
      dispatch(uncheckAllCompanies(companies));
      // очищаем массив с сотрудниками
      dispatch(deleteAllCoworkers());
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
      dispatch(deleteAllCoworkersFromChecked());
    }
  }

  // обработчик изменения данных в таблице компаний
  const handleUpdateCompany = evt => {
    evt.preventDefault();

    mainApi.updateCompany(updatingCompany)
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
    dispatch(deleteAllCompaniesFromChecked());
    // удаляем сотрудников из таблицы
    dispatch(deleteAllCoworkers());
  }

  // обработчик удаления сотрудника
  const handleClickDeleteCoworker = _ => {
    checkedCoworkers.forEach(el => {
      mainApi.deleteCoworker(el.id).catch(err => console.log(err));
    });

    // удаляем сотрудников из store
    dispatch(deleteCoworkerFromStore(coworkers));
    // очищаем массив выбранных сотрудников
    dispatch(deleteAllCoworkersFromChecked());
    // удаляем сотрудников из таблицы
    dispatch(deleteCoworkersFromTable(selectedCoworkers));
  }

  return (
    <div className="App">
      <Header />
      <Main
        onClickCheckboxCompany={handleClickCheckboxCompany}
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
