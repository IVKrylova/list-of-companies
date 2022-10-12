import Row from '../Row/Row';

const RowCompany = props => {
  const classNameTextares = `row__cell row__cell_textarea ${props.checked ? 'row__cell_checked' : ''}`;

  const handleChange = _ => {

  }

  return (
    <Row
      checked={props.checked}
      onClickCheckbox={props.onClickCheckbox}
      company={props.company}
    >
      <textarea
        className={classNameTextares}
        defaultValue={props.name}
        name='name'
        onChange={handleChange}
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
      >
      </textarea>
    </Row>
  );
}

export default RowCompany;
