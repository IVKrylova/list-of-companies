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

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const handleScroll = _ => {
    const documentHeight = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scroll = window.scrollY;
    const limit = documentHeight - screenHeight / 5;
    const position = scroll + screenHeight;

    if (position >= limit && companies.length <= totalCount) {
      setFetching(true);
    }
  }

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

  useEffect(_ => {
    document.addEventListener('scroll', optimizedHandlerScroll);

    return function() {
      document.removeEventListener('scroll', optimizedHandlerScroll);
    }
  }, []);

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

  useEffect(_ => {
    mainApi.getCoworkers()
      .then(res => dispatch(getCoworkers(res)))
      .catch(err => console.log(err))
  }, []);

  const handleClickCheckboxCompany = company => {
    dispatch(checkCompany(companies, company));
    if (company.checked) {
      dispatch(addCompanyToChecked(checkedCompanies, company));
      dispatch(addCoworkers(selectedCoworkers, coworkers.filter(el => el.company === company.name)));
    } else {
      dispatch(deleteCompanyFromChecked(checkedCompanies, company));
      dispatch(deleteCoworkers(selectedCoworkers, company));
    }
  }

  const handleClickCheckboxCoworker = coworker => {
    dispatch(checkCoworker(coworkers, coworker));
    if (coworker.checked) {
      dispatch(addCoworkerToChecked(checkedCoworkers, coworker));
    } else {
      dispatch(deleteCoworkerFromChecked(checkedCoworkers, coworker));
    }
  }

  const handleClickCheckboxAllCompanies = isChecked => {
    if (!isChecked) {
      dispatch(addAllCompaniesToChecked(companies));
      dispatch(checkAllCompanies(companies));
      dispatch(addAllCoworkers(coworkers))
    }
    if (isChecked) {
      dispatch(deleteAllCompaniesFromChecked());
      dispatch(uncheckAllCompanies(companies));
      dispatch(deleteAllCoworkers());
    }
  }

  const handleClickCheckboxAllCoworkers = isChecked => {
    if (!isChecked) {
      dispatch(checkAllCoworkers(coworkers));
      dispatch(addAllCoworkersToChecked(selectedCoworkers));
    }
    if (isChecked) {
      dispatch(uncheckAllCoworkers(coworkers));
      dispatch(deleteAllCoworkersFromChecked());
    }
  }

  const handleUpdateCompany = evt => {
    evt.preventDefault();

    mainApi.updateCompany(updatingCompany)
      .then(_ => {
        mainApi.getCompanies()
          .then(res => dispatch(getCompanies(res)))
      })
      .catch(err => console.log(err));
  }

  const handleUpdateCoworker = evt => {
    evt.preventDefault();

    mainApi.updateCoworker(updatingCoworker)
      .then(_ => {
        mainApi.getCoworkers()
          .then(res => dispatch(getCoworkers(res)))
      })
      .catch(err => console.log(err));
  }

  const handleAddNewCompany = evt => {
    evt.preventDefault();

    mainApi.addCompany(newCompany)
      .then(res => {
        res.checked = false;
        dispatch(addNewCompanyToStore(companies, res));
      })
      .catch(err => console.log(err));
  }

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

  const handleClickDeleteCompany = _ => {
    checkedCompanies.forEach(el => {
      mainApi.deleteCompany(el.id).catch(err => console.log(err));
    });

    dispatch(deleteCompanyFromStore(companies));

    checkedCompanies.forEach(el => {
      coworkers.forEach(coworker => {
        if (el.name === coworker.company) {
          mainApi.deleteCoworker(coworker.id).catch(err => console.log(err));
        }
      })
    })

    dispatch(deleteAllCompaniesFromChecked());
    dispatch(deleteAllCoworkers());
  }

  const handleClickDeleteCoworker = _ => {
    checkedCoworkers.forEach(el => {
      mainApi.deleteCoworker(el.id).catch(err => console.log(err));
    });

    dispatch(deleteCoworkerFromStore(coworkers));
    dispatch(deleteAllCoworkersFromChecked());
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
