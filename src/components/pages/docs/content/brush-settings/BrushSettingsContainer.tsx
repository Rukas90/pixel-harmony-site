import SubContentContainer from "components/SubContentContainer"
import { TextSize } from "components/types/TextSize"
import { ReactNode } from "react"

interface Props {
  header: string
  headerSize?: TextSize
  children?: ReactNode
}

const BrushSettingsContainer = ({
  header,
  headerSize = TextSize.MD,
  children,
}: Props) => {
  return (
    <SubContentContainer header={header} collapsable headerSize={headerSize}>
      {children}
    </SubContentContainer>
  )
}
export default BrushSettingsContainer
