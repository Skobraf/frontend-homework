import MenuLink from "./MenuLink";
import Companies from "./Companies";

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void;
};

const DropdownMenu = ({toggleDropdownMenuVisibility}:DispatchProps) => {

  return (
    <div className="sub-list-container" >
      <Companies />
        <MenuLink text="Get the mobile app" icon="phone_iphone" />

        <MenuLink text="Community" icon="people" toggleDropdownMenuVisibility={toggleDropdownMenuVisibility} />

        <MenuLink text="Knowledge base" icon="book" toggleDropdownMenuVisibility={toggleDropdownMenuVisibility} />

        <MenuLink text="Settings" icon="settings " toggleDropdownMenuVisibility={toggleDropdownMenuVisibility} />

        <MenuLink text="Log out" icon="exit_to_app" toggleDropdownMenuVisibility={toggleDropdownMenuVisibility} />
    </div>
  );
};

export default DropdownMenu;