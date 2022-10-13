import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableAdd from '../TableAdd/TableAdd';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const TableAddCoworker = props => {
  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormAndValidation();

  const coworkers = useSelector(store => store.coworkers.coworkers);

  useEffect(_ => {
    setIsValid(false);
  }, []);

  useEffect(_ => {
    resetForm();
  }, [coworkers]);

  return (
    <TableAdd
      isValid={isValid}
      sentDataRow={props.sentDataRow}
      values={values}
      tableAddHeader='Добавить сотрудника'
      classModifierForm='table-add__form_place_coworkers'
      classModifierHeader='table-add__header_place_coworkers'
      errorMessage={props.errorMessage}
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
            required={true}
            minLength='2'
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.lastname || ''}
            name='lastname'
            onChange={handleChange}
            required={true}
            minLength='2'
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.position || ''}
            required={true}
            minLength='2'
            name='position'
            onChange={handleChange}
          />
          <input
            className='table-add__cell input'
            type='text'
            value={values.company || ''}
            required={true}
            minLength='2'
            name='company'
            onChange={handleChange}
          />
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.name}
          </span>
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.lastname}
          </span>
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.position}
          </span>
          <span className={`input__error ${!isValid ? 'input__error_active' : ''}`}>
            {!isValid && errors.company}
          </span>
        </>
      }
    />
  );
}

export default TableAddCoworker;
