type Props = {
  text: string;
  icon: string;
  toggleDropdownMenuVisibility?: () => void;
};

const MenuLink = ({ icon, text, toggleDropdownMenuVisibility }: Props) => (
  <div className="list-item" onClick={toggleDropdownMenuVisibility}>
    <i className="material-icons">{icon}</i>
    <p className="item-text">{text}</p>
  </div>
);

export default MenuLink;
