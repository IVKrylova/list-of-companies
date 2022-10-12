import { useSelector } from 'react-redux';
import ListCoworkers from '../ListCoworkers/ListCoworkers';
import Table from '../Table/Table';

const TableCoworkers = props => {
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const checkedCoworkers = useSelector(store => store.checkedCoworkers.checkedCoworkers);

  return (
    <Table
      title='Сотрудники'
      tableName='coworkers'
      secondColumn='Фамилия'
      thirdColumn='Имя'
      fourthColumn='Должность'
      onClickCheckbox={props.onClickCheckboxAllCoworkers}
      onSubmitForm={props.onSubmitForm}
      onClickButtonDelete={props.onClickButtonDelete}
      isChecked={!!checkedCoworkers.length}
    >
      <ListCoworkers
        coworkers={selectedCoworkers}
        onClickCheckbox={props.onClickCheckboxCoworker}
      />
    </Table>
  );
}

export default TableCoworkers;
