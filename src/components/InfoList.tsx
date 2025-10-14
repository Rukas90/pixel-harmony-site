import InfoListItem from "./InfoListItem"

export enum MarkerType {
  Number,
  Letter,
}
export type InfoListData = {
  Text: string
  Children?: InfoListData[]
}
interface Props {
  data: InfoListData[]
  marker?: MarkerType
}

const InfoList = ({ data, marker = MarkerType.Number }: Props) => {
  return (
    <ul>
      {data.map((item, index) => (
        <InfoListItem
          data={item}
          index={index + 1}
          indent={0}
          marker={marker}
        />
      ))}
    </ul>
  )
}
export default InfoList
