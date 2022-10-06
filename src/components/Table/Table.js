import Row from '../Row/Row';
import './Table.css';

const Table = props => {
  return (
    <section className='table'>
      <h2 className='table__title'>{props.title}</h2>
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
        isHiddenButtonSave={true}
        isHiddenButtonDelete={false}
        isHiddenButtonAdd={true}
      />
      {/* Данные таблицы */}
      {props.children}
      {/* Строка для добавления данных */}
      <Row
        formName={`add-${props.tableName}`}
        secondCell=''
        thirdCell=''
        fourthCell=''
        editingSecondCell={false}
        editingThirdCell={false}
        editingFourthCell={false}
        isHiddenButtonSave={true}
        isHiddenButtonDelete={true}
        isHiddenButtonAdd={false}
      />
    </section>
  );
}

export default Table;
