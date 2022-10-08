import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCompany } from '../../store/actionCreators/updatingCompany';
import './Row.css';

const Row = props => {
  const dispatch = useDispatch();

  // хуки состояния значения ячеек таблицы
  const [ values, setValues ] = useState({});

  // класс ячейки
  const cellClassName = `row__cell ${props.cellClassModifier ? props.cellClassModifier : ''} ${props.checked ? 'row__cell_checked' : ''}`;

  // обработчик клика по чекбоксу
  const handleClickCheckbox = _ => {
    if (props.labelText !== 'Выделить всё') {
      props.companie && props.onClickCheckbox(props.companie);
      props.coworker && props.onClickCheckbox(props.coworker);
    }

    if (props.labelText === 'Выделить всё') {
      props.onClickCheckbox(props.checked);
    }
  }

  // установка начального значения стейтов ячеек
  useEffect(_ => {
    props.companie && setValues({ name: props.companie.name, address: props.companie.address, id: props.companie.id });
  }, []);

  // обработчик изменения ячейки
  const handleChange = evt => {
    const {name, value} = evt.target;

    setValues({...values, [name]: value });
  }

  // сохраняем значения в store
  useEffect(_ => {
    props.companie && dispatch(updateCompany(values));
  }, [values])

  return (
    <fieldset className='row'>
      <label className={cellClassName}>
        <input
          type='checkbox'
          id={`${props.formName}-checkbox`}
          name={`${props.formName}-checkbox`}
          checked={props.checked}
          onChange={handleClickCheckbox}
        />
        {props.labelText ? props.labelText : ''}
      </label>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingSecondCell}
        defaultValue={props.secondCell}
        name={props.nameSecondCell}
        onChange={handleChange}
      >
      </textarea>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingThirdCell}
        defaultValue={props.thirdCell}
        name={props.nameThirdCell}
        onChange={handleChange}
      >
      </textarea>
      <textarea
        className={`${cellClassName} row__cell_textarea`}
        readOnly={props.editingFourthCell}
        defaultValue={props.fourthCell}
        name={props.nameFourthCell}
        onChange={handleChange}
      >
      </textarea>
    </fieldset>
  );
}

export default Row;
