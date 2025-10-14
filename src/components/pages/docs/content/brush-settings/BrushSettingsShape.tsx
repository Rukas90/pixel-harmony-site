import Paragraph from "components/Paragraph"
import BrushSettingsContainer from "./BrushSettingsContainer"

const BrushSettingsShape = () => {
  return (
    <BrushSettingsContainer header="Shape">
      <Paragraph>
        <b>Shape settings</b> control the stamp shape. The <b>Roundness </b>
        option sets the diameter of the brush nozzles, while the <b>Angle </b>
        rotates them to a specified degree. These settings are particularly
        useful for non-round brushes, such as when creating calligraphic
        effects.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsShape
