import { useSelector } from 'react-redux';
import RowCompany from '../RowCompany/RowCompany';

const ListCompanies = props => {
  const coworkers = useSelector(store => store.coworkers.coworkers);

  return (
    props.companies && props.companies.map(company => {
      return (
        <RowCompany
          key={company.id}
          name={company.name}
          count={coworkers.filter(el => el.company === company.name).length}
          address={company.address}
          checked={company.checked}
          onClickCheckbox={props.onClickCheckbox}
          company={company}
          sentUpdateCompany={props.sentUpdateCompany}
        />
       )
    })
  );
}

export default ListCompanies;
