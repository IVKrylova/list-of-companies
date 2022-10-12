import { useSelector } from 'react-redux';
import ListCompanies from '../ListCompanies/ListCompanies';
import ListCoworkers from '../ListCoworkers/ListCoworkers';
import Table from '../Table/Table';
import TableAddCompany from '../TableAddCompany/TableAddCompany';
import TableAddCoworker from '../TableAddCoworker/TableAddCoworker';
import './Main.css';

const Main = props => {
  const companies = useSelector(store => store.companies.companies);
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);
  const checkedCoworkers = useSelector(store => store.checkedCoworkers.checkedCoworkers);

  return (
    <main className='content'>
      <section className='companies'>
        <Table
          title='Компании'
          tableName='companies'
          secondColumn='Название компании'
          thirdColumn='Кол-во сотрудников'
          fourthColumn='Адрес'
          isChecked={!!checkedCompanies.length}
          onClickCheckbox={props.onClickCheckboxAllCompanies}
          onSubmitForm={props.onUpdateCompany}
          onClickButtonDelete={props.onClickDeleteCompany}
        >
          <ListCompanies
            companies={companies}
            onClickCheckbox={props.onClickCheckboxCompany}
          />
        </Table>
        <TableAddCompany
          sentDataRow={props.sentDataCompany}
        />
      </section>
      <section className='coworkers'>
        <Table
          title='Сотрудники'
          tableName='coworkers'
          secondColumn='Фамилия'
          thirdColumn='Имя'
          fourthColumn='Должность'
          onClickCheckbox={props.onClickCheckboxAllCoworkers}
          onSubmitForm={props.onUpdateCoworker}
          addNewCoworker={props.addNewCoworker}
          onClickButtonDelete={props.onClickDeleteCoworker}
          isChecked={!!checkedCoworkers.length}
        >
          <ListCoworkers
            coworkers={selectedCoworkers}
            onClickCheckbox={props.onClickCheckboxCoworker}
          />
        </Table>
        <TableAddCoworker
          addNewCoworker={props.addNewCoworker}
        />
      </section>
    </main>
  );
}

export default Main;
