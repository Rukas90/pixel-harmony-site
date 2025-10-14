import MenuBtnIcon from "assets/img/menu-btn.svg"

interface Props {
  onClick?: () => void
  className?: string
}

const MenuBtn = ({ onClick, className }: Props) => {
  return (
    <button onClick={onClick}>
      <img
        src={MenuBtnIcon}
        className={`w-8 h-8 my-auto opacity-65 hover:opacity-85 transition-opacity ${className}`}
      />
    </button>
  )
}
export default MenuBtn
