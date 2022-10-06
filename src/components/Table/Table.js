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
      {/* {props.companies &&
        props.companies.map(companie => {
          return (
            <Row
              key={companie.id}
              formName={companie.name}
              editingSecondCell={false}
              secondCell={companie.name}
              editingThirdCell={true}
              thirdCell='count'
              editingFourthCell={false}
              fourthCell={companie.address}
              isHiddenButtonSave={false}
              isHiddenButtonDelete={false}
              isHiddenButtonAdd={true}
            />
          )
        })
      }
      {props.coworkers &&
        props.coworkers.map(coworker => {
          return (
            <Row
              key={coworker.id}
              formName={coworker.lastname}
              editingSecondCell={false}
              secondCell={coworker.lastname}
              editingThirdCell={false}
              thirdCell={coworker.name}
              editingFourthCell={false}
              fourthCell={coworker.position}
              isHiddenButtonSave={false}
              isHiddenButtonDelete={false}
              isHiddenButtonAdd={true}
            />
          )
        })
      } */}
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
