import './HeaderTable.css';

const HeaderTable = props => {
  const handleClickCheckbox = _ => {
    props.onClickCheckbox(props.checked);
  }

  return (
    <ul className='header-table'>
      <li className='header-tabel__cell header-checkbox'>
        <input
          type='checkbox'
          onChange={handleClickCheckbox}
        />
        <p className='header-tabel__checkbox-text'>
          Выделить всё
        </p>
      </li>
      <li className='header-tabel__cell'>
        {props.secondCell}
      </li>
      <li className='header-tabel__cell'>
        {props.thirdCell}
      </li>
      <li className='header-tabel__cell'>
        {props.fourthCell}
      </li>
    </ul>
  );
}

export default HeaderTable;
