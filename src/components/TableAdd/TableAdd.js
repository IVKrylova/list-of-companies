import Button from '../Button/Button';
import './TableAdd.css';

const TableAdd = props => {
  const handleSubmit = evt => {
    evt.preventDefault();

    props.sentDataRow(props.values);
  }

  return (
    <div className='table-add'>
      <h2 className='table-add__title'>
        {props.tableAddHeader}
      </h2>
      <ul className={`table-add__header ${props.classModifierHeader ? props.classModifierHeader : ''}`}>
        {props.headerTable}
      </ul>
      <form className={`form table-add__form ${props.classModifierForm ? props.classModifierForm : ''}`} onSubmit={handleSubmit}>
        {props.bodyTable}
        <Button
          isValid={props.isValid}
          buttonText='Добавить'
          type='submit'
        />
        <span className={`table-add__error ${props.errorMessage ? 'table-add__error_visible' : ''}`}>
          {props.errorMessage}
        </span>
      </form>
    </div>
  );
}

export default TableAdd;
