import BrushSettingsContainer from "./BrushSettingsContainer"
import BrushSettingsEffectsFade from "./BrushSettingsEffectsFade"
import BrushSettingsEffectsTrail from "./BrushSettingsEffectsTrail"
import BrushSettingsEffectsContinuous from "./BrushSettingsEffectsContinuous"
import BrushSettingsEffectsTexture from "./BrushSettingsEffectsTexture"
import Paragraph from "components/Paragraph"
import HorizontalLine from "components/HorizontalLine"

const BrushSettingsEffects = () => {
  return (
    <BrushSettingsContainer header="Effects">
      <Paragraph>
        <b>Effects settings</b> allow the application of various effects to
        enhance the brush strokes, making them more dynamic and visually
        engaging.
      </Paragraph>
      <HorizontalLine />
      <div className="ml-4">
        <BrushSettingsEffectsFade />
        <BrushSettingsEffectsTrail />
        <BrushSettingsEffectsContinuous />
        <BrushSettingsEffectsTexture />
      </div>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsEffects
