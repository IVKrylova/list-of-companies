import { useSelector } from 'react-redux';
import Row from '../Row/Row';

const ListCompanies = props => {
  const coworkers = useSelector(store => store.coworkers.coworkers);

  return (
    props.companies && props.companies.map(company => {
      return (
        <Row
          key={company.id}
          formName={company.name}
          editingSecondCell={false}
          secondCell={company.name}
          editingThirdCell={true}
          thirdCell={coworkers.filter(el => el.company === company.name).length}
          editingFourthCell={false}
          fourthCell={company.address}
          isHiddenButtonSave={false}
          isHiddenButtonDelete={false}
          isHiddenButtonAdd={true}
          checked={company.checked}
          onClickCheckbox={props.onClickCheckbox}
          company={company}
          nameSecondCell='name'
          nameThirdCell='count'
          nameFourthCell='address'
        />
       )
    })
  );
}

export default ListCompanies;
