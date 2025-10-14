import CloseBtnIcon from "assets/img/close-btn.svg"

interface Props {
  onClick: () => void
}

const CloseBtn = ({ onClick }: Props) => {
  return (
    <button
      className="w-6 h-6 opacity-65 hover:opacity-85 transition-opacity"
      onClick={onClick}
    >
      <img src={CloseBtnIcon} />
    </button>
  )
}
export default CloseBtn
