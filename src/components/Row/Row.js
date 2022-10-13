import Button from '../Button/Button';
import './Row.css';

const Row = props => {
  const hendleSubmitForm = evt => {
    evt.preventDefault();

    props.sentUpdateData(props.values);
    props.resetForm();
  }

  return (
    <form className='row' onSubmit={hendleSubmitForm}>
      <label className={`row__cell ${props.checked ? 'row__cell_checked' : ''}`}>
        <input
          type='checkbox'
          checked={props.checked}
          onChange={props.onClickCheckbox}
        />
      </label>
      {props.children}
      <Button
        isValid={props.isValid}
        buttonText='Сохранить'
        type='submit'
        classModifier='button_place_main-table'
      />
    </form>
  );
}

export default Row;
