import { useState } from "react"
import HorizontalLine from "../../HorizontalLine"
import EyeOpened from "./assets/eye-opened.svg"
import EyeClosed from "./assets/eye-closed.svg"

interface Props {
  label: string
  summary: string
}

const DocPropItem = ({ label, summary }: Props) => {
  const [foldout, setFoldout] = useState(false)

  return (
    <li className="text-stone-300 w-full px-6 py-4 mb-6 rounded-xl bg-stone-800">
      <div
        className="flex flex-row items-center cursor-pointer select-none"
        onClick={() => setFoldout((current) => !current)}
      >
        <img
          src={foldout ? EyeOpened : EyeClosed}
          className="w-5 h-5 opacity-70 mr-2"
        />
        {label}
      </div>
      {foldout && (
        <div className="pl-7">
          <HorizontalLine colorClass="bg-stone-600" />
          <p>
            <i>{summary}</i>
          </p>
        </div>
      )}
    </li>
  )
}
export default DocPropItem
