type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text }: Props) => (
  <div className="list-item"> 
    <i className="material-icons" >
      {icon}
    </i>
    <p className="item-text">{text}</p>
  </div>
)

export default MenuLink
