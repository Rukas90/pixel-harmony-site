import ArrowIcon from "components/ArrowIcon"
import CurvedArrow from "assets/img/misc/curved-arrow-right.png"
import SafeHTMLParagraph from "./SafeHTMLParagraph"
import { useState } from "react"

interface Props {
  label: string
  type: string
  summary: string
  className?: string
}
const PropertyBlock = ({ label, type, summary, className }: Props) => {
  const [foldout, setFoldout] = useState(true)

  return (
    <li
      className={`relative text-sm text-stone-200 overflow-hidden ${className}`}
    >
      <div
        className="flex flex-row justify-between items-center bg-custom-875 hover:bg-custom-850 transition-colors"
        onClick={() => setFoldout((current) => !current)}
      >
        <div className="flex flex-row">
          <div className="w-1 bg-yellow-500" />
          <p
            className={`ml-3 text-xs my-auto ${
              type && type.toLowerCase() === "gradient"
                ? "gradient-text font-semibold"
                : "text-yellow-400 "
            } select-none`}
          >
            {type}
          </p>
          <p className="py-2 ml-2">{label}</p>
        </div>
        <div
          className={`w-5 h-5 ${
            foldout ? "rotate-180" : "rotate-90"
          } transition-transform mr-2 opacity-65`}
        >
          <ArrowIcon fill="#FFFFFF" />
        </div>
      </div>
      {foldout && (
        <div className="flex flex-row">
          <div className="w-1 bg-stone-800" />
          <div className="bg-custom-925 p-4 text-stone-400 w-full">
            <img className="absolute w-3 h-3 opacity-50" src={CurvedArrow} />
            <SafeHTMLParagraph html={summary} className="ml-5" />
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-px bg-stone-800" />
    </li>
  )
}
export default PropertyBlock
