import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addCompany } from '../../store/actionCreators/newCompany';
import './TableAddCompany.css';

const TableAddCompany = props => {
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
    dispatch(addCompany(values));
  }, [values]);

  return (
    <div className='table-add'>
      <ul className='table-add__header'>
        <li className='table-add__cell'>Имя</li>
        <li className='table-add__cell'>Адрес</li>
      </ul>
      <form className='table-add__form' onSubmit={props.addNewCompany}>
        <input
          className='table-add__cell input'
          type='text'
          value={values.name || ''}
          name='name'
          onChange={handleChange}
        />
        <input
          className='table-add__cell input'
          type='text'
          value={values.address || ''}
          name='address'
          onChange={handleChange}
        />
        <Button
          disabled={!values.name && !values.address}
          buttonText='Добавить'
          type='submit'
        />
      </form>
    </div>
  );
}

export default TableAddCompany;
