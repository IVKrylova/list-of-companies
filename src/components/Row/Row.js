import { useState } from 'react';
import './Row.css';

const Row = props => {
  // стейт чекбокса
  const [isCheckedRow, setIsCheckedRow] = useState(false);
  // класс ячейки
  const cellClassName = `row__cell ${props.cellClassModifier ? props.cellClassModifier : '' } ${isCheckedRow ? 'row__cell_checked' : ''}`;

  // обработчик клика по чекбоксу
  const handleClickCheckbox = _ => {
    isCheckedRow ? setIsCheckedRow(false) : setIsCheckedRow(true);
  }

  return (
    <fieldset className='row'>
      <label className={cellClassName}>
        <input
          type='checkbox'
          id={`${props.formName}-checkbox`}
          name={`${props.formName}-checkbox`}
          checked={isCheckedRow}
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
     {/*  <Button
        disabled={true}
        buttonText='Сохранить'
        isHidden={props.isHiddenButtonSave}
      />
      <Button
        disabled={true}
        buttonText='Удалить'
        isHidden={props.isHiddenButtonDelete}
      />
      <Button
        disabled={true}
        buttonText='Добавить'
        isHidden={props.isHiddenButtonAdd}
      /> */}
    </fieldset>
  );
}

export default Row;
