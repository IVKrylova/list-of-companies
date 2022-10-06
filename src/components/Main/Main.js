import { useSelector } from 'react-redux';
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
        companies={companies}
      />
      <Table
        title='Сотрудники'
        tableName='coworkers'
        secondColumn='Фамилия'
        thirdColumn='Имя'
        fourthColumn='Должность'
        coworkers={coworkers}
      />
    </main>
  );
}

export default Main;
