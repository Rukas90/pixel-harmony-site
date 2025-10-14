import { TextSize } from "components/types/TextSize"
import BrushSettingsContainer from "./BrushSettingsContainer"
import Paragraph from "components/Paragraph"

const BrushSettingsEffectsFade = () => {
  return (
    <BrushSettingsContainer header="Fade" headerSize={TextSize.MD}>
      <Paragraph>
        <b>Fade settings</b> add a fade-in effect to the brush stroke. The{" "}
        <b>Steps</b> value specifies the number of steps it takes to transition
        from a <b>Minimum</b> opacity to the target opacity set in the
        inspector.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsEffectsFade
