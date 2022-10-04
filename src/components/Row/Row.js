import './Row.css';

const Row = props => {
  return (
    <ul className='table__row row-with-data'>
      <li className='table__cell cell-with-data'>
        <input type='checkbox' id='checkbox' name='checkbox' />
      </li>
      <li className='table__cell column-name cell-with-data'>
        {props.secondCell}
      </li>
      <li className='table__cell column-name cell-with-data'>
        {props.thirdCell}
      </li>
      <li className='table__cell column-name cell-with-data'>
        {props.fourthCell}
      </li>
    </ul>
  );
}

export default Row;
