import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReduxState, Company } from "./types";
import { getCompanies, getSingleCompany } from "./selectors";
import { setSelectedCompanyId, toggleDropdownMenuVisibility } from "./actions";

import CompanyLink from "./CompanyLink";

type ReduxProps = {
  companies: Array<Company>;
  singleCompany:Company[];
};

type DispatchProps = {
  setSelectedCompanyId:(id:number) => void;
  toggleDropdownMenuVisibility: () => void;
};

export const Companies = ({ companies,  setSelectedCompanyId, toggleDropdownMenuVisibility, singleCompany }: ReduxProps & DispatchProps) => (
  <>
    <div className="list-item" onClick={toggleDropdownMenuVisibility}>Your companies</div>

    {companies.map((company) => (
      <CompanyLink
        key={company.id}
        {...company}
        setSelectedCompanyId={setSelectedCompanyId}
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibility}
        singleCompany={singleCompany}
      />
    ))}
  </>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    singleCompany:getSingleCompany
  }),
  { setSelectedCompanyId, toggleDropdownMenuVisibility }
)(Companies);
