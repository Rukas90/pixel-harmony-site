import { TextSize } from "components/types/TextSize"
import BrushSettingsContainer from "./BrushSettingsContainer"
import Paragraph from "components/Paragraph"

const BrushSettingsEffectsTrail = () => {
  return (
    <BrushSettingsContainer header="Trail" headerSize={TextSize.MD}>
      <Paragraph>
        <b>Trail settings</b> add a trailing effect by rotating the stamp in the
        direction of the brush stroke as it is painted.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsEffectsTrail
