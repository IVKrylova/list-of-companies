import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addNewCoworker } from '../../store/actionCreators/newCoworker';
import './TableAddCoworker.css';

const TableAddCoworker = props => {
  // хуки состояния значения ячеек таблицы
  const [ values, setValues ] = useState({});

  const dispatch = useDispatch();

  // обработчик изменения ячейки
  const handleChange = evt => {
    const {name, value} = evt.target;

    setValues({...values, [name]: value });
  }

  // сохраняем значения в store
  useEffect(_ => {
    dispatch(addNewCoworker(values));
  }, [values]);

  return (
    <div className='table-add-coworker'>
      <ul className='table-add-coworker__header'>
        <li className='table-add-coworker__cell'>Имя</li>
        <li className='table-add-coworker__cell'>Фамилия</li>
        <li className='table-add-coworker__cell'>Должность</li>
        <li className='table-add-coworker__cell'>Компания</li>
      </ul>
      <form className='table-add-coworker__form' onSubmit={props.addNewCoworker}>
        <input
          className='table-add-coworker__cell input-coworker'
          type='text'
          value={values.name || ''}
          name='name'
          onChange={handleChange}
        />
        <input
          className='table-add-coworker__cell input-coworker'
          type='text'
          value={values.lastname || ''}
          name='lastname'
          onChange={handleChange}
        />
        <input
          className='table-add-coworker__cell input-coworker'
          type='text'
          value={values.position || ''}
          name='position'
          onChange={handleChange}
        />
        <input
          className='table-add-coworker__cell input-coworker'
          type='text'
          value={values.company || ''}
          name='company'
          onChange={handleChange}
        />
        <Button
          disabled={!values.name}
          buttonText='Добавить'
          type='submit'
        />
      </form>
    </div>
  );
}

export default TableAddCoworker;
