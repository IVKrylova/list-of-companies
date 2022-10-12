import TableAddCompany from '../TableAddCompany/TableAddCompany';
import TableAddCoworker from '../TableAddCoworker/TableAddCoworker';
import TableCompanies from '../TableCompanies/TableCompanies';
import TableCoworkers from '../TableCoworkers/TableCoworkers';
import './Main.css';

const Main = props => {
  return (
    <main className='content'>
      <section className='companies'>
        <TableCompanies
          onClickCheckboxAllCompanies={props.onClickCheckboxAllCompanies}
          onSubmitForm={props.onUpdateCompany}
          onClickButtonDelete={props.onClickDeleteCompany}
          onClickCheckboxCompany={props.onClickCheckboxCompany}
          sentUpdateCompany={props.sentUpdateCompany}
        />
        <TableAddCompany
          sentDataRow={props.sentDataCompany}
          errorMessage={props.errorMessage}
        />
      </section>
      <section className='coworkers'>
        <TableCoworkers
          onClickCheckboxAllCoworkers={props.onClickCheckboxAllCoworkers}
          onSubmitForm={props.onUpdateCoworker}
          addNewCoworker={props.addNewCoworker}
          onClickButtonDelete={props.onClickDeleteCoworker}
          onClickCheckboxCoworker={props.onClickCheckboxCoworker}
          sentUpdateCoworker={props.sentUpdateCoworker}
        />
        <TableAddCoworker
          sentDataRow={props.sentDataCoworker}
        />
      </section>
    </main>
  );
}

export default Main;
