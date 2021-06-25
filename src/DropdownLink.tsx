import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useEffect, useRef } from "react";

import { Company, ReduxState } from "./types";
import { getIsDropdownMenuVisible, getSingleCompany } from "./selectors";
import { toggleDropdownMenuVisibility, setSelectedCompanyId } from "./actions";

import DropdownMenu from "./DropdownMenu";

type ReduxProps = {
  isDropdownMenuVisible: boolean;
  singleCompany: Company[];
};

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void;
  setSelectedCompanyId: (id: number) => void;
};
function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void,
  isDropdownMenuVisible: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        if (isDropdownMenuVisible) {
          callback();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownMenuVisible, ref]);
}
export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  singleCompany,
}: ReduxProps & DispatchProps) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(
    wrapperRef,
    toggleDropdownMenuVisibility,
    isDropdownMenuVisible
  );
  return (
    <>
      <div ref={wrapperRef}>
        <div
          className="nav__link"
          onClick={toggleDropdownMenuVisibility}
          data-test-nav-link
        >
          <div className="nav__link-text-wrapper">
            <div className="nav__link-text">Elon Musk</div>

            <div className="nav__link-subtext">{singleCompany[0]?.name ?? ''}</div>
          </div>

          <i className="material-icons-outlined nav__link-icon">settings</i>
        </div>

        {isDropdownMenuVisible && (
          <DropdownMenu
            toggleDropdownMenuVisibility={toggleDropdownMenuVisibility}
          />
        )}
      </div>
    </>
  );
};

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    singleCompany: getSingleCompany,
  }),
  { toggleDropdownMenuVisibility, setSelectedCompanyId }
)(DropdownLink);
