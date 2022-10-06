import './Row.css';

const Row = props => {
  // класс ячейки
  const cellClassName = `row__cell ${props.cellClassModifier ? props.cellClassModifier : ''} ${props.checked ? 'row__cell_checked' : ''}`;

  // обработчик клика по чекбоксу
  const handleClickCheckbox = _ => {
    props.companie && props.onClickCheckbox(props.companie);
  }

  return (
    <fieldset className='row'>
      <label className={cellClassName}>
        <input
          type='checkbox'
          id={`${props.formName}-checkbox`}
          name={`${props.formName}-checkbox`}
          checked={props.checked}
          onClick={handleClickCheckbox}
        />
        {props.labelText ? props.labelText : ''}
      </label>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingSecondCell}
        defaultValue={props.secondCell}
      >
      </textarea>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingThirdCell}
        defaultValue={props.thirdCell}
      >
      </textarea>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingFourthCell}
        defaultValue={props.fourthCell}
      >
      </textarea>
    </fieldset>
  );
}

export default Row;
