import Row from '../Row/Row';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const RowCompany = props => {
  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormAndValidation();

  const classNameTextares = `row__cell row__cell_textarea ${props.checked ? 'row__cell_checked' : ''}`;



  return (
    <Row
      checked={props.checked}
      onClickCheckbox={props.onClickCheckbox}
      company={props.company || values.company}
    >
      <textarea
        className={classNameTextares}
        defaultValue={props.name || values.name}
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
        onChange={handleChange}
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.address}
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
