import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCompany } from '../../store/actionCreators/updatingCompany';
import { updateCoworker } from '../../store/actionCreators/updatingCoworker';
import './Row.css';

const Row = props => {
  const dispatch = useDispatch();

  const [ values, setValues ] = useState({});

  const handleClickCheckbox = _ => {
    props.company && props.onClickCheckbox(props.company);
    props.coworker && props.onClickCheckbox(props.coworker);
  }

  useEffect(_ => {
    props.company && setValues({
      name: props.company.name,
      address: props.company.address,
      id: props.company.id
    });

    props.coworker && setValues({
      id: props.coworker.id,
      name: props.coworker.name,
      lastname: props.coworker.lastname,
      position: props.coworker.position,
      company: props.coworker.company,
    });

  }, []);

  useEffect(_ => {
    props.company && dispatch(updateCompany(values));
    props.coworker && dispatch(updateCoworker(values));
  }, [values])

  return (
    <fieldset className='row'>
      <label className={`row__cell ${props.checked ? 'row__cell_checked' : ''}`}>
        <input
          type='checkbox'
          checked={props.checked}
          onChange={handleClickCheckbox}
        />
      </label>
      {props.children}
    </fieldset>
  );
}

export default Row;
