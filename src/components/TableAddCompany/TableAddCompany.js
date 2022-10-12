import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableAdd from '../TableAdd/TableAdd';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const TableAddCompany = props => {
  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormAndValidation();

  const companies = useSelector(store => store.companies.companies);

  useEffect(_ => {
    setIsValid(false);
  }, []);

  useEffect(_ => {
    resetForm();
  }, [companies]);

  return (
    <TableAdd
      sentDataRow={props.sentDataRow}
      tableAddHeader='Добавить компанию'
      isValid={isValid}
      values={values}
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
            required={true}
            minLength='2'
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.address || ''}
            name='address'
            onChange={handleChange}
            required={true}
            minLength='10'
          />
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.name}
          </span>
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.address}
          </span>
        </>
      }
    />
  );
}

export default TableAddCompany;
