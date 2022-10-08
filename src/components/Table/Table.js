import { useSelector } from 'react-redux';
import Row from '../Row/Row';
import Button from '../Button/Button';
import TableAddCompany from '../TableAddCompany/TableAddCompany';
import './Table.css';

const Table = props => {
  // получаем данные из store
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);
  const companies = useSelector(store => store.companies.companies);

  // значение чекбокса
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
          />
        </li>
      </ul>
      </form>
      {props.tableName === 'companies'
        ? <TableAddCompany
          addNewCompany={props.addNewCompany}
        />
        : <TableAddCompany />
      }

      {/* {/* Строка для добавления данных
      <form>
        <Row
          formName={`add-${props.tableName}`}
          cellClassModifier='row__cell_adding'
          secondCell=''
          thirdCell=''
          fourthCell=''
          editingSecondCell={false}
          editingThirdCell={false}
          editingFourthCell={false}
        />
        <Button
          disabled={true}
          buttonText='Добавить'
          type='submit'
        />
      </form> */}
    </section>
  );
}

export default Table;
