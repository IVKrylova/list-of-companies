import Row from "../Row/Row";

const ListCoworkers = props => {
  return (
    props.coworkers && props.coworkers.map(coworker => {
      return (
        <Row
          key={coworker.id}
          formName={coworker.name}
          editingSecondCell={false}
          secondCell={coworker.name}
          editingThirdCell={true}
          thirdCell='count'
          editingFourthCell={false}
          fourthCell={coworker.address}
          isHiddenButtonSave={false}
          isHiddenButtonDelete={false}
          isHiddenButtonAdd={true}
        />
       )
    })
  );
}

export default ListCoworkers;
