import { TextSize } from "components/types/TextSize"
import BrushSettingsContainer from "./BrushSettingsContainer"
import Paragraph from "components/Paragraph"

const BrushSettingsEffectsContinuous = () => {
  return (
    <BrushSettingsContainer header="Continuous" headerSize={TextSize.MD}>
      <Paragraph>
        <b>Continuous</b> option allows the brush to paint continuously while
        holding down the mouse button. Normally, strokes are painted as the
        mouse is moved, but with this option enabled, the brush continues to
        paint even without mouse movement.
        <br />
        This feature is particularly useful for effects like dust or splashes
        when using a high scatter brush.
        <br />
        <br />
        The <b>Delay</b> value controls the interval between each stamp, with a
        value of 1 indicating a 1-second delay.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsEffectsContinuous
