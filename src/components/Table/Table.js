import { useSelector } from 'react-redux';
import Row from '../Row/Row';
import Button from '../Button/Button';
import './Table.css';

const Table = props => {
  // получаем данные из store
  const selectedCoworkers = useSelector(store => store.selectedCoworkers.selectedCoworkers);

  return (
    <section className={`table ${selectedCoworkers.length === 0 && props.tableName === 'coworkers' ? 'table_hidden' : ''}`}>
      <h2 className='table__title'>{props.title}</h2>
      <form className='form' id={props.tableName} name={props.tableName}>
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
      />
      {/* Данные таблицы */}
      {props.children}
      <ul className='buttons'>
        <li>
          <Button
            disabled={true}
            buttonText='Сохранить'
          />
        </li>
        <li>
          <Button
            disabled={!props.isChecked}
            buttonText='Удалить'
          />
        </li>
      </ul>
      </form>
      {/* Строка для добавления данных */}
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
        />
      </form>
    </section>
  );
}

export default Table;
