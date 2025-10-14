import Paragraph from "components/Paragraph"
import BrushSettingsContainer from "./BrushSettingsContainer"

const BrushSettingsScatter = () => {
  return (
    <BrushSettingsContainer header="Scatter">
      <Paragraph>
        <b>Scatter settings</b>, when enabled, allow for scattering brush stamps
        as the stroke is painted. The <b>amount</b> controls the scatter
        intensity as a percentage based on the brush radius. By default,
        scattering affects only the vertical axis. To apply scattering on both
        axes, enable the <b>BothAxis</b> option.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsScatter
