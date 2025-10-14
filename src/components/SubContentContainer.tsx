import { ReactNode, useState } from "react"
import SubHeader from "./SubHeader"
import { TextSize } from "./types/TextSize"

interface Props {
  header: string
  collapsable?: boolean
  children?: ReactNode
  headerSize?: TextSize
  headerLineMargin?: boolean
}

const SubContentContainer = ({
  header,
  collapsable,
  children,
  headerSize = TextSize.LG,
  headerLineMargin = true,
}: Props) => {
  const [foldout, setFoldout] = useState(true)

  return (
    <>
      <SubHeader
        label={header}
        collapsable={collapsable}
        foldout={foldout}
        onClick={
          collapsable ? () => setFoldout((current) => !current) : undefined
        }
        headerSize={headerSize}
        lineMargin={headerLineMargin}
      />
      {(collapsable && foldout && children) || (!collapsable && children)}
    </>
  )
}
export default SubContentContainer
