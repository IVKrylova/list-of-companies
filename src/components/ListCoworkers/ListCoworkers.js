import Row from "../Row/Row";

const ListCoworkers = props => {
  return (
    props.coworkers && props.coworkers.map(coworker => {
      return (
        <Row
          key={coworker.id}
          formName={coworker.lastname}
          editingSecondCell={false}
          secondCell={coworker.lastname}
          editingThirdCell={false}
          thirdCell={coworker.name}
          editingFourthCell={false}
          fourthCell={coworker.position}
          isHiddenButtonSave={false}
          isHiddenButtonDelete={false}
          isHiddenButtonAdd={true}
        />
       )
    })
  );
}

export default ListCoworkers;
