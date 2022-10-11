import { useSelector } from 'react-redux';
import Row from '../Row/Row';
import Button from '../Button/Button';
import TableAddCompany from '../TableAddCompany/TableAddCompany';
import TableAddCoworker from '../TableAddCoworker/TableAddCoworker';
import './Table.css';

const Table = props => {
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const companies = useSelector(store => store.companies.companies);

  const isChecked = props.tableName === 'coworkers' ? selectedCoworkers.every(el => el.checked) : companies.every(el => el.checked);

  return (
    <section className={`table ${selectedCoworkers.length === 0 && props.tableName === 'coworkers' ? 'table_hidden' : ''}`}>
      <h2 className='table__title'>{props.title}</h2>
      <form className='form' id={props.tableName} name={props.tableName} onSubmit={props.onSubmitForm}>
      {/* Шапка таблицы */}
      <Row
        formName={props.tableName}
        cellClassModifier='row__cell_header'
        labelText='Выделить всё'
        secondCell={props.secondColumn}
        thirdCell={props.thirdColumn}
        fourthCell={props.fourthColumn}
        editingSecondCell={true}
        editingThirdCell={true}
        editingFourthCell={true}
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
      {props.tableName === 'companies'
        ? <TableAddCompany
          addNewCompany={props.addNewCompany}
        />
        : <TableAddCoworker
          addNewCoworker={props.addNewCoworker}
        />
      }
    </section>
  );
}

export default Table;
