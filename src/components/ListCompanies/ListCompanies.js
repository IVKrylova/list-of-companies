import Row from "../Row/Row";

const ListCompanies = props => {
  return (
    props.companies && props.companies.map(companie => {
      return (
        <Row
          key={companie.id}
          formName={companie.name}
          editingSecondCell={false}
          secondCell={companie.name}
          editingThirdCell={true}
          thirdCell='count'
          editingFourthCell={false}
          fourthCell={companie.address}
          isHiddenButtonSave={false}
          isHiddenButtonDelete={false}
          isHiddenButtonAdd={true}
        />
       )
    })
  );
}

export default ListCompanies;
