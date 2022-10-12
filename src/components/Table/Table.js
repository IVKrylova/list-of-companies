import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './Table.css';
import HeaderTable from '../HederTable/HeaderTable';

const Table = props => {
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const companies = useSelector(store => store.companies.companies);

  const isChecked = props.tableName === 'coworkers' ? selectedCoworkers.every(el => el.checked) : companies.every(el => el.checked);

  return (
    <div className={`main-table ${selectedCoworkers.length === 0 && props.tableName === 'coworkers' ? 'main-table_hidden' : ''}`}>
      <h2 className='main-table__title'>{props.title}</h2>
      <form className='form' id={props.tableName} name={props.tableName} onSubmit={props.onSubmitForm}>
        <HeaderTable
          secondCell={props.secondColumn}
          thirdCell={props.thirdColumn}
          fourthCell={props.fourthColumn}
          onClickCheckbox={props.onClickCheckbox}
          checked={isChecked}
        />
        {/* Данные таблицы */}
        {props.children}
        <ul className='buttons'>
          <li>
            <Button
              disabled={false}
              buttonText='Сохранить'
              type='submit'
            />
          </li>
          <li>
            <Button
              disabled={!props.isChecked}
              buttonText='Удалить'
              type='button'
              onClickButtonDelete={props.onClickButtonDelete}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Table;
