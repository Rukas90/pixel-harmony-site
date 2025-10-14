import DOMPurify from "dompurify"

interface Props {
  html: string
  className?: string
}

const SafeHTMLParagraph = ({ html, className }: Props) => {
  const getSafeHTML = (html: string) => {
    return { __html: DOMPurify.sanitize(html) }
  }
  return (
    <p
      className={`text-stone-300 text-sm ${className}`}
      dangerouslySetInnerHTML={getSafeHTML(html)}
    ></p>
  )
}
export default SafeHTMLParagraph
