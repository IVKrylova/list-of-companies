import RowCoworker from '../RowCoworker/RowCoworker';

const ListCoworkers = props => {
  return (
    props.coworkers && props.coworkers.map(coworker => {
      return (
        <RowCoworker
          key={coworker.id}
          coworker={coworker}
          onClickCheckbox={props.onClickCheckbox}
          checked={coworker.checked}
          lastname={coworker.lastname}
          name={coworker.name}
          position={coworker.position}
        />
       )
    })
  );
}

export default ListCoworkers;
