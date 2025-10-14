import BrushRadiusExample from "assets/img/paint-radius-eample.gif"
import BrushOpacityExample from "assets/img/paint-opacity-example.gif"
import { TextSize } from "components/types/TextSize"
import HorizontalLine from "components/HorizontalLine"
import SubContentContainer from "components/SubContentContainer"
import Paragraph from "components/Paragraph"
import SymmetryInfo from "./SymmetryInfo"

const BrushMainSettingsInfo = () => {
  return (
    <SubContentContainer
      header="Main Settings"
      headerSize={TextSize.MD}
      headerLineMargin={false}
    >
      <SymmetryInfo />
      <HorizontalLine />
      <div className="flex flex-row gap-4 my-4">
        <div>
          <img src={BrushRadiusExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Radius</Paragraph>
        </div>
        <div>
          <img src={BrushOpacityExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Opacity</Paragraph>
        </div>
      </div>
    </SubContentContainer>
  )
}
export default BrushMainSettingsInfo
