import { useSelector } from 'react-redux';
import ListCompanies from '../ListCompanies/ListCompanies';
import ListCoworkers from '../ListCoworkers/ListCoworkers';
import Table from '../Table/Table';
import './Main.css';

const Main = _ => {
  // получаем данные из store
  const companies = useSelector(store => store.companies.companies);
  const coworkers = useSelector(store => store.coworkers.coworkers);

  return (
    <main className='content'>
      <Table
        title='Компании'
        tableName='companies'
        secondColumn='Название компании'
        thirdColumn='Кол-во сотрудников'
        fourthColumn='Адрес'
      >
        <ListCompanies
          companies={companies}
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
          coworkers={coworkers}
        />
      </Table>
    </main>
  );
}

export default Main;
