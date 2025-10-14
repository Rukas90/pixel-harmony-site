import { Info } from "./Documentation"
import HorizontalLine from "../../HorizontalLine"
import { DocMenuItemProps } from "./DocMenuItem"
import Paragraph from "../../Paragraph"

interface Props {
  info: Info
  menu: DocMenuItemProps[]
  index: number | null
}

const DocInfoContent = ({ info }: Props) => {
  return (
    <>
      <p className="text-sm mb-1 text-yellow-400 font-semibold">
        {info.Category}
      </p>
      <p className="relative text-2xl text-stone-200 font-semibold">
        <span className="relative">
          {info.DisplayTitle}
          {info.Label && (
            <span className="absolute top-0 left-full w-max bg-yellow-500 font-bold text-custom-975 text-xs px-2 py-0.5 rounded-md ml-3">
              {info.Label}
            </span>
          )}
        </span>
      </p>
      <HorizontalLine />
      <Paragraph html={info.Description} />
    </>
  )
}
export default DocInfoContent
