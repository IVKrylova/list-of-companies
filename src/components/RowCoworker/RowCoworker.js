import Row from '../Row/Row';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect } from 'react';

const RowCoworker = props => {
  const { values, handleChange, errors, isValid, setIsValid, setValues, resetForm } = useFormAndValidation();

  const classNameTextares = `row__cell row__cell_textarea ${props.checked ? 'row__cell_checked' : ''}`;

  useEffect(_ => {
    setValues(props.coworker);
    setIsValid(false);
  }, []);

  return (
    <Row
      coworker={props.coworker}
      onClickCheckbox={props.onClickCheckbox}
      checked={props.checked}
      isValid={isValid}
      values={values}
      sentUpdateData={props.sentUpdateCoworker}
      resetForm={resetForm}
    >
      <textarea
        className={classNameTextares}
        defaultValue={props.lastname}
        value={values.lastname}
        name='lastname'
        onChange={handleChange}
        required={true}
        minLength='2'
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.name}
        name='name'
        onChange={handleChange}
        value={values.name}
        required={true}
        minLength='2'
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.position}
        name='position'
        onChange={handleChange}
        value={values.position}
        required={true}
        minLength='2'
      >
      </textarea>
      <span className={`row__error row__error_type_lastnameCoworker ${!isValid ? 'row__error_active' : ''}`}>
        {!isValid && errors.lastname}
      </span>
      <span className={`row__error row__error_type_nameCoworker ${!isValid ? 'row__error_active' : ''}`}>
        {!isValid && errors.name}
      </span>
      <span className={`row__error row__error_type_positionCoworker ${!isValid ? 'row__error_active' : ''}`}>
        {!isValid && errors.position}
      </span>
    </Row>
  );
}

export default RowCoworker;
