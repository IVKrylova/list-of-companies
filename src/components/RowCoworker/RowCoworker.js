import Row from '../Row/Row';

const RowCoworker = props => {
  const classNameTextares = `row__cell row__cell_textarea ${props.checked ? 'row__cell_checked' : ''}`;

  const handleChange = _ => {

  }

  return (
    <Row
      coworker={props.coworker}
      onClickCheckbox={props.onClickCheckbox}
      checked={props.checked}
    >
      <textarea
        className={classNameTextares}
        defaultValue={props.lastname}
        name='lastname'
        onChange={handleChange}
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.name}
        name='name'
        onChange={handleChange}
      >
      </textarea>
      <textarea
        className={classNameTextares}
        defaultValue={props.position}
        name='position'
        onChange={handleChange}
      >
      </textarea>
    </Row>
  );
}

export default RowCoworker;
