import { createAction } from "typesafe-actions";

export const toggleDropdownMenuVisibility = createAction(
  "TOGGLE_DROPDOWN_MENU_VISIBILITY"
)();

export const setSelectedCompanyId = createAction(
  "SET_SELECTED_COMPANY_ID"
)<number>();
