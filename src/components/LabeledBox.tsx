import { ReactNode, useEffect, useState } from "react"
import ArrowIcon from "./ArrowIcon"

interface Props {
  label: string
  content: ReactNode
  defaultFoldout: boolean
}

const LabeledBox = ({ label, content, defaultFoldout = true }: Props) => {
  const [foldout, setFoldout] = useState(true)

  useEffect(() => {
    setFoldout(defaultFoldout)
  }, [defaultFoldout])

  return (
    <div
      className={`border-2 ${
        !foldout && "bg-stone-800"
      } transition-all px-8 py-8 rounded-lg text-sm relative border-stone-800 mt-16`}
    >
      <p
        className={`text-stone-400 text-lg absolute transition-all ${
          foldout ? "-top-4 bg-stone-950" : "top-4 left-4"
        }  pr-2 flex cursor-pointer flex-grow items-center`}
        onClick={() => setFoldout((current) => !current)}
      >
        <div
          className={`p-1 w-8 h-8 transition-transform ${
            foldout ? "rotate-90" : "rotate-180"
          }`}
        >
          <ArrowIcon fill="#F1F1F1" />
        </div>
        <span className="pointer-events-none select-none">{label}</span>
      </p>
      {foldout && <p className="text-stone-200">{content}</p>}
    </div>
  )
}
export default LabeledBox
