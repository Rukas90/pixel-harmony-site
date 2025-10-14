import { InfoListData, MarkerType } from "./InfoList"
import SafeHTMLParagraph from "./SafeHTMLParagraph"

interface Props {
  data: InfoListData
  index: number
  indent: number
  marker: MarkerType
}
const InfoListItem = ({ data, index, indent, marker }: Props) => {
  const displayIndex =
    marker === MarkerType.Letter ? String.fromCharCode(65 + index - 1) : index

  return (
    <>
      <li
        className="flex flex-row items-center mb-3"
        style={{ marginLeft: `calc(1rem * ${indent})` }}
      >
        <div className="bg-custom-775 text-sm rounded-full min-w-6 min-h-6 flex items-center justify-center text-stone-300 mr-3">
          {displayIndex}
        </div>
        <SafeHTMLParagraph html={data.Text} />
      </li>
      {data.Children &&
        data.Children.map((item, index) => (
          <InfoListItem
            data={item}
            index={index + 1}
            indent={indent + 1}
            marker={marker}
          />
        ))}
    </>
  )
}
export default InfoListItem
