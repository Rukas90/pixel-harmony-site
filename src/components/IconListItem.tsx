import { useState } from "react"
import ArrowIcon from "./ArrowIcon"
import Paragraph from "./Paragraph"
import CurvedArrowIcon from "assets/img/misc/curved-arrow-right.png"

interface Props {
  icon: string | null
  text: string
  note?: string
  className?: string
}

const IconListItem = ({ icon, text, note, className }: Props) => {
  const [foldout, setFoldout] = useState(false)

  return (
    <li className={`relative overflow-hidden ${className}`}>
      <div className="absolute w-full h-px top-0 left-0 bg-stone-800" />
      <div
        className={`flex justify-between bg-custom-925 ${
          note && "cursor-pointer hover:bg-custom-850 transition-colors"
        } py-2 px-4 items-center`}
        onClick={note ? () => setFoldout((current) => !current) : undefined}
      >
        <div className="flex flex-row items-center">
          {icon && <img className="w-4 h-4 mr-1.5" src={icon} />}
          <Paragraph className="text-sm">{text}</Paragraph>
        </div>
        {note && (
          <div
            className={`w-5 h-5 ${
              foldout ? "rotate-180" : "rotate-90"
            } transition-transform opacity-50`}
          >
            <ArrowIcon fill="#FFFFFF" />
          </div>
        )}
      </div>
      {note && foldout && (
        <div className="relative bg-custom-875 py-4 px-4">
          <img
            src={CurvedArrowIcon}
            className="w-3 top-4 mt-px left-4 opacity-60 absolute select-none"
          />
          <Paragraph className="text-sm text-stone-400 ml-5" html={note} />
        </div>
      )}
    </li>
  )
}
export default IconListItem
