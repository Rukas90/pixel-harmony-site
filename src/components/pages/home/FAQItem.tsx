import { ReactNode } from "react"

interface Props {
  index: number
  label: string
  content: ReactNode
  bottomMargin: boolean
}

const FAQItem = ({ index, label, content, bottomMargin = true }: Props) => {
  return (
    <>
      <p className="text-stone-200 font-semibold mb-4">
        {index}. {label}
      </p>
      <p className={`text-stone-400 ${bottomMargin && "mb-8"}`}>{content}</p>
    </>
  )
}

export default FAQItem
