import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewCoworker } from '../../store/actionCreators/newCoworker';
import TableAdd from '../TableAdd/TableAdd';

const TableAddCoworker = props => {
  const [ values, setValues ] = useState({});

  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;

    setValues({...values, [name]: value });
  }

  useEffect(_ => {
    dispatch(addNewCoworker(values));
  }, [values]);

  return (
    <TableAdd
      disabled={!values.name}
      addNewRow={props.addNewCoworker}
      tableAddHeader='Добавить сотрудника'
      classModifierForm='table-add__form_place_coworkers'
      classModifierHeader='table-add__header_place_coworkers'
      headerTable={
        <>
          <li className='table-add__cell'>Имя</li>
          <li className='table-add__cell'>Фамилия</li>
          <li className='table-add__cell'>Должность</li>
          <li className='table-add__cell'>Компания</li>
        </>
      }
      bodyTable={
        <>
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
            value={values.lastname || ''}
            name='lastname'
            onChange={handleChange}
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.position || ''}
            name='position'
            onChange={handleChange}
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.company || ''}
            name='company'
            onChange={handleChange}
          />
        </>
      }
    />
  );
}

export default TableAddCoworker;
