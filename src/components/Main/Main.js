import Table from '../Table/Table';
import './Main.css';

const Main = _ => {
  return (
    <main className='content'>
      <Table
        title='Компании'
        tableName='companies'
        secondColumn='Название компании'
        thirdColumn='Кол-во сотрудников'
        fourthColumn='Адрес'
      />
      <Table
        title='Сотрудники'
        tableName='coworkers'
        secondColumn='Фамилия'
        thirdColumn='Имя'
        fourthColumn='Должность'
      />
    </main>
  );
}

export default Main;
