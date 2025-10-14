import ArrowIcon from "./ArrowIcon"
import HorizontalLine from "./HorizontalLine"
import { TextSize } from "./types/TextSize"

interface Props {
  label: string
  collapsable?: boolean
  foldout?: boolean
  onClick?: () => void
  headerSize?: TextSize
  lineMargin?: boolean
}

const SubHeader = ({
  label,
  collapsable,
  foldout,
  onClick,
  headerSize = TextSize.LG,
  lineMargin = true,
}: Props) => {
  return (
    <>
      <div
        className={`flex items-center py-1.5 px-2 mt-4 rounded-md ${
          collapsable && "cursor-pointer hover:bg-custom-925 transition-colors"
        } ${headerSize}`}
        onClick={onClick}
      >
        {collapsable && (
          <div
            className={`w-7 h-7 mr-1 opacity-65 transition-transform ${
              foldout ? "rotate-180" : "rotate-90"
            }`}
          >
            <ArrowIcon fill="#FFFFFF" />
          </div>
        )}
        <p className="text-stone-200 font-semibold">{label}</p>
      </div>
      <HorizontalLine margin={lineMargin} />
    </>
  )
}
export default SubHeader
