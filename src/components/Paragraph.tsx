import { ReactNode } from "react"
import SafeHTMLParagraph from "./SafeHTMLParagraph"

interface Props {
  children?: ReactNode
  html?: string
  className?: string
}
const Paragraph = ({ children, html, className }: Props) => {
  return html ? (
    <SafeHTMLParagraph html={html} className={className} />
  ) : (
    <p className={`text-stone-300 lg:text-sm text-base ${className}`}>{children}</p>
  )
}
export default Paragraph
