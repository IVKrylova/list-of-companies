import Button from '../Button/Button';
import './Row.css';

const Row = props => {
  const cellClassName = `row__cell ${props.cellClassModifier ? props.cellClassModifier : '' }`;

  return (
    <form className='row' id={props.formName} name={props.formName}>
      <label className={cellClassName}>
        <input type='checkbox' id={`${props.formName}-checkbox`} name={`${props.formName}-checkbox`} />
        {props.labelText ? props.labelText : ''}
      </label>
      <textarea className={`${cellClassName} row__cell_textarea`} readOnly={props.editingSecondCell}>
        {props.secondCell}
      </textarea>
      <textarea className={`${cellClassName} row__cell_textarea`} readOnly={props.editingThirdCell}>
        {props.thirdCell}
      </textarea>
      <textarea className={`${cellClassName} row__cell_textarea`} readOnly={props.editingFourthCell}>
        {props.fourthCell}
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
