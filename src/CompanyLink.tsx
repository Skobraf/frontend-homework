import { Company } from "./types";

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
  toggleDropdownMenuVisibility: () => void;
  singleCompany: Company[];
};

const CompanyLink = ({
  name,
  id,
  setSelectedCompanyId,
  toggleDropdownMenuVisibility,
  singleCompany,
}: Company & DispatchProps) => {
  const handleClick = () => {
    setSelectedCompanyId(id);
    toggleDropdownMenuVisibility();
  };
  return (
    <div
      className={`list-item ${
        singleCompany[0]?.name === name && "active-item"
      }`}
      onClick={handleClick}
    >
      {name}
      {singleCompany[0]?.name === name && (
        <span className="material-icons-outlined icon">done</span>
      )}
    </div>
  );
};

export default CompanyLink;
