import Paragraph from "components/Paragraph"
import FlowExample from "assets/img/brush-flow.jpg"
import BrushSettingsContainer from "./BrushSettingsContainer"

const BrushSettingsFlow = () => {
  return (
    <BrushSettingsContainer header="Flow">
      <Paragraph>
        <b>Flow controls</b> the brush stroke <b>spacing</b>. When enabled, a
        spacing percentage can be set to determine the distance between stroke
        stamps, where 100% spacing equals the brush radius.
        <br />
        <br />
        <b>Flip Options</b> allow flipping the stamp mask horizontally and/or
        vertically.
      </Paragraph>
      <img src={FlowExample} className="w-48 rounded-md mt-4 drop-shadow-xl" />
    </BrushSettingsContainer>
  )
}
export default BrushSettingsFlow
