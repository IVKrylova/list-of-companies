import Button from '../Button/Button';
import './TableAdd.css';

const TableAdd = props => {
  return (
    <div className='table-add'>
      <h2 className='table-add__title'>
        {props.tableAddHeader}
      </h2>
      <ul className={`table-add__header ${props.classModifierHeader ? props.classModifierHeader : ''}`}>
        {props.headerTable}
      </ul>
      <form className={`table-add__form ${props.classModifierForm ? props.classModifierForm : ''}`} onSubmit={props.addNewRow}>
        {props.bodyTable}
        <Button
          disabled={props.disabled}
          buttonText='Добавить'
          type='submit'
        />
      </form>
    </div>
  );
}

export default TableAdd;
