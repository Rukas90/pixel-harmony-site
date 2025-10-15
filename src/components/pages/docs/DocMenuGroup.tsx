import { useState } from "react"
import DocMenuItem, { DocMenuItemProps } from "./DocMenuItem"
import ArrowIcon from "../../ArrowIcon"

interface Props {
  label: string
  items: DocMenuItemProps[]
  indent: number
  menu?: HTMLDivElement | null
}

const DocMenuGroup = ({ label, items, indent, menu }: Props) => {
  const [foldout, setFoldout] = useState(true)

  return (
    <div className="font-semibold text-sm text-stone-200">
      <div
        className="mt-2 mb-2 flex flex-row items-center cursor-pointer select-none opacity-95 hover:opacity-100"
        onClick={() => setFoldout((current) => !current)}
        style={{ marginLeft: indent + "rem" }}
      >
        <div
          className={`w-5 h-5 mr-1 transition-transform ${
            foldout ? "rotate-180" : "rotate-90"
          }`}
        >
          <ArrowIcon fill="#FFFFFF" />
        </div>
        <p className="text-stone-300 lg:text-sm text-md">{label}</p>
      </div>

      {foldout && <DocMenuItem items={items} indent={indent + 1} menu={menu} />}
    </div>
  )
}
export default DocMenuGroup
