import Row from '../Row/Row';
import './Table.css';

const Table = props => {
  return (
    <section className='table'>
      <h2 className='table__title'>{props.title}</h2>
      <ul className='table__row'>
        <li className='table__cell column-name'>
          <input type='checkbox' id='joint-checkbox' name='joint-checkbox' className='joint-checkbox' />
          <label for='joint-checkbox'>Выделить всё</label>
        </li>
        <li className='table__cell column-name'>
          {props.secondColumn}
        </li>
        <li className='table__cell column-name'>
          {props.thirdColumn}
        </li>
        <li className='table__cell column-name'>
          {props.fourthColumn}
        </li>
      </ul>
      <Row
        secondCell={props.secondCell}
        thirdCell={props.thirdCell}
        fourthCell={props.fourthCell}
      />
    </section>
  );
}

export default Table;
