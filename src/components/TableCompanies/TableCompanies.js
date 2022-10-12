import { useSelector } from 'react-redux';
import ListCompanies from '../ListCompanies/ListCompanies';
import Table from '../Table/Table';

const TableCompanies = props => {
  const checkedCompanies = useSelector(store => store.checkedCompanies.checkedCompanies);
  const companies = useSelector(store => store.companies.companies);

  return (
    <Table
      title='Компании'
      tableName='companies'
      secondColumn='Название компании'
      thirdColumn='Кол-во сотрудников'
      fourthColumn='Адрес'
      isChecked={!!checkedCompanies.length}
      onClickCheckbox={props.onClickCheckboxAllCompanies}
      onSubmitForm={props.onSubmitForm}
      onClickButtonDelete={props.onClickButtonDelete}
    >
      <ListCompanies
        companies={companies}
        onClickCheckbox={props.onClickCheckboxCompany}
        sentUpdateCompany={props.sentUpdateCompany}
      />
    </Table>
  );
}

export default TableCompanies;
