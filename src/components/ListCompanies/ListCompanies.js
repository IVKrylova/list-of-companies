import { useSelector } from 'react-redux';
import Row from '../Row/Row';

const ListCompanies = props => {
  // получаем данные из store
  const coworkers = useSelector(store => store.coworkers.coworkers);

  return (
    props.companies && props.companies.map(companie => {
      return (
        <Row
          key={companie.id}
          formName={companie.name}
          editingSecondCell={false}
          secondCell={companie.name}
          editingThirdCell={true}
          thirdCell={coworkers.filter(el => el.company === companie.name).length}
          editingFourthCell={false}
          fourthCell={companie.address}
          isHiddenButtonSave={false}
          isHiddenButtonDelete={false}
          isHiddenButtonAdd={true}
          checked={companie.checked}
          onClickCheckbox={props.onClickCheckbox}
          companie={companie}
        />
       )
    })
  );
}

export default ListCompanies;
