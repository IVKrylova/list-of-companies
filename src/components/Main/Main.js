import Table from '../Table/Table';
import './Main.css';

const Main = _ => {
  return (
    <main className='content'>
      <Table
        title='Компании'
        secondColumn='Название компании'
        thirdColumn='Кол-во сотрудников'
        fourthColumn='Адрес'
        secondCell='xxxxxxxxxx'
        thirdCell='xxxxxxxxx'
        fourthCell='xxxxxxxxx'
      />
      <Table
        title='Сотрудники'
        secondColumn='Фамилия'
        thirdColumn='Имя'
        fourthColumn='Должность'
        secondCell='xxxxxxxxxx'
        thirdCell='xxxxxxxxx'
        fourthCell='xxxxxxxxx'
      />
    </main>
  );
}

export default Main;
