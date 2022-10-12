import Row from '../Row/Row';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect } from 'react';

const RowCompany = props => {
  const { values, handleChange, errors, isValid, setIsValid, setValues, resetForm } = useFormAndValidation();

  const classNameTextares = `row__cell row__cell_textarea ${props.checked ? 'row__cell_checked' : ''}`;

  useEffect(_ => {
    setValues(props.company);
    setIsValid(false);
  }, []);

  const handleClickCheckbox = _ => {
    props.company && props.onClickCheckbox(props.company);
  }

  return (
    <Row
      checked={props.checked}
      onClickCheckbox={handleClickCheckbox}
      company={props.company}
      isValid={isValid}
      values={values}
      sentUpdateData={props.sentUpdateCompany}
      resetForm={resetForm}
    >
      <textarea
        className={classNameTextares}
        defaultValue={props.name}
        value={values.name}
        name='name'
        onChange={handleChange}
        required={true}
        minLength='2'
      >
      </textarea>
      <textarea
        className={classNameTextares}
        readOnly={true}
        defaultValue={props.count}
        name='count'
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.address}
        value={values.address}
        name='address'
        onChange={handleChange}
        required={true}
        minLength='10'
      >
      </textarea>
      <span className={`row__error row__error_type_nameCompany ${!isValid ? 'row__error_active' : ''}`}>
        {!isValid && errors.name}
      </span>
      <span className={`row__error row__error_type_addressCompany ${!isValid ? 'row__error_active' : ''}`}>
        {!isValid && errors.address}
      </span>
    </Row>
  );
}

export default RowCompany;
