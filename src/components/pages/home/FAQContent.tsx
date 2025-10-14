import DOMPurify from "dompurify"
import data from "assets/res/FAQ.json"
import FAQItem from "./FAQItem"

const FAQContent = () => {
  const getSafeHTML = (html: string) => {
    return { __html: DOMPurify.sanitize(html) }
  }

  return (
    <>
      {data.map((item, index) => (
        <FAQItem
          key={`FAQItem_${index}`}
          index={index + 1}
          label={item.label}
          content={
            <div dangerouslySetInnerHTML={getSafeHTML(item.content)}></div>
          }
          bottomMargin={index < data.length - 1}
        />
      ))}
    </>
  )
}
export default FAQContent
