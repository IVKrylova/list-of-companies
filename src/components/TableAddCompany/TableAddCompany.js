import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../store/actionCreators/newCompany';
import TableAdd from '../TableAdd/TableAdd';

const TableAddCompany = props => {
  const [ values, setValues ] = useState({});

  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;

    setValues({...values, [name]: value });
  }

  useEffect(_ => {
    dispatch(addCompany(values));
  }, [values]);

  return (
    <TableAdd
      disabled={!values.name && !values.address}
      addNewRow={props.addNewCompany}
      tableAddHeader='Добавить компанию'
      headerTable={
        <>
          <li className='table-add__cell'>Имя</li>
          <li className='table-add__cell'>Адрес</li>
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
            value={values.address || ''}
            name='address'
            onChange={handleChange}
          />
        </>
      }
    />
  );
}

export default TableAddCompany;
