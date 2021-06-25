import { ReduxState, Company } from "./types";

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible;

export const isCompanySelected = (
  state: ReduxState,
  props: { company: Company }
) => state.selectedCompanyId === props.company.id;

export const getCompanies = (state: ReduxState) => state.companies;

export const getSelectedId = (state: ReduxState) => state.selectedCompanyId;

export const getSingleCompany = (state: ReduxState) =>
  state.companies.filter(
    (singleCompany: Company) => singleCompany.id === getSelectedId(state)
  );
