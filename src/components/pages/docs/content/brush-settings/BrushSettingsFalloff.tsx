import Paragraph from "components/Paragraph"
import BrushSettingsContainer from "./BrushSettingsContainer"
import Link from "components/Link"

const BrushSettingsFalloff = () => {
  return (
    <BrushSettingsContainer header="Falloff">
      <Paragraph>
        <b>Falloff</b> controls the brush mask hardness. When enabled, the
        slider can be adjusted to specify the falloff percentage. There are two
        falloff modes available: <i>Radial</i> and <i>SDF</i>.
        <br />
        <br />
        The <i>Radial</i> falloff applies a radial-based effect and is
        particularly useful for round brush masks.
        <br />
        <br />
        The <i>SDF</i> mode is more advanced, generating an SDF (
        <Link href="https://en.wikipedia.org/wiki/Signed_distance_function">
          Signed Distance Field
        </Link>
        ) mask from the brush mask, which is embedded into the brush asset. This
        SDF falloff mask is then applied when painting, allowing for a perfectly
        tailored falloff that matches the brush shape.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsFalloff
