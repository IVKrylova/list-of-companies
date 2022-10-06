import { useState } from 'react';
import Button from '../Button/Button';
import './Row.css';

const Row = props => {
  // стейт чекбокса
  const [isChecked, setIsChecked] = useState(false);
  // класс ячейки
  const cellClassName = `row__cell ${props.cellClassModifier ? props.cellClassModifier : '' } ${isChecked ? 'row__cell_checked' : ''}`;

  // обработчик клика по чекбоксу
  const handleClickCheckbox = _ => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  return (
    <form className='row' id={props.formName} name={props.formName}>
      <label className={cellClassName}>
        <input
          type='checkbox'
          id={`${props.formName}-checkbox`}
          name={`${props.formName}-checkbox`}
          checked={isChecked}
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
      <Button
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
      />
    </form>
  );
}

export default Row;
