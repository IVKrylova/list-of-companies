import './Row.css';

const Row = props => {
  return (
    <ul className='table__row'>
      <li className='table__cell cell-with-data'>
        <input type='checkbox' id='checkbox' name='checkbox' />
      </li>
      <li className='table__cell'>
        {props.secondCell}
      </li>
      <li className='table__cell'>
        {props.thirdCell}
      </li>
      <li className='table__cell'>
        {props.fourthCell}
      </li>
    </ul>
  );
}

export default Row;
