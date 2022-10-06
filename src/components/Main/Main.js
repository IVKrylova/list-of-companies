import { useSelector } from 'react-redux';
import ListCompanies from '../ListCompanies/ListCompanies';
import ListCoworkers from '../ListCoworkers/ListCoworkers';
import Table from '../Table/Table';
import './Main.css';

const Main = props => {
  // получаем данные из store
  const companies = useSelector(store => store.companies.companies);
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);

  return (
    <main className='content'>
      <Table
        title='Компании'
        tableName='companies'
        secondColumn='Название компании'
        thirdColumn='Кол-во сотрудников'
        fourthColumn='Адрес'
        isChecked={!!checkedCompanies.length}
      >
        <ListCompanies
          companies={companies}
          onClickCheckbox={props.onClickCheckboxCompanie}
        />
      </Table>
      <Table
        title='Сотрудники'
        tableName='coworkers'
        secondColumn='Фамилия'
        thirdColumn='Имя'
        fourthColumn='Должность'
      >
        <ListCoworkers
          coworkers={selectedCoworkers}
        />
      </Table>
    </main>
  );
}

export default Main;
