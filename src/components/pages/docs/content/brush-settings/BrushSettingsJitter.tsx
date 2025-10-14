import Paragraph from "components/Paragraph"
import BrushSettingsContainer from "./BrushSettingsContainer"

const BrushSettingsJitter = () => {
  return (
    <BrushSettingsContainer header="Jitter">
      <Paragraph>
        <b>Jittering settings</b> allow applying randomization to the brush
        stamps as the stroke is painted, adding variability to the brush
        strokes.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsJitter
