import { TextSize } from "components/types/TextSize"
import BrushSettingsContainer from "./BrushSettingsContainer"
import Paragraph from "components/Paragraph"
import NoteBlock from "components/NoteBlock"

const BrushSettingsEffectsTexture = () => {
  return (
    <BrushSettingsContainer header="Texture" headerSize={TextSize.MD}>
      <Paragraph>
        <b>Texture settings</b> allow applying a texture overlay to the brush
        stamp mask.
        <br />
        <br />
        To apply the texture, first, specify the pattern. Currently, to do this,
        you must enter the pattern ID value.
        <br />
        <br />
        To get the pattern ID, head to -{" "}
        <b>Window &gt; Resources &gt; Patterns</b>. Locate your pattern and,
        after selecting it in the browse menu, click on the clipboard copy icon
        next to the ID field. Then paste the copied ID value into the{" "}
        <b>Pattern ID</b> field.
        <NoteBlock
          text="This process will be significantly simplified
        in upcoming updates."
        />
        <br />
        After specifying the pattern, you can tweak various options to determine
        how the pattern should be applied to the brush mask.
        <br />
        <br />
        <b>Invert</b> option inverts the pattern texture.
        <br />
        <b>Scale</b> option scales the pattern texture. A scale of 1 is
        equivalent to the original pattern texture scale.
        <br />
        <b>Brightness</b> option adjusts the brightness of the pattern texture.
        <br />
        <b>Contrast</b> option adjusts the contrast of the pattern texture.
        <br />
        <br />
        <b>Texture Each Tip</b> option, when enabled, applies a pattern to each
        stamp individually. Otherwise, a pattern is applied as a global overlay
        to the entire stroke.
        <br />
        <b>The blend mode</b> option specifies how the pattern should interact
        with the brush mask.
        <br />
        <b>Depth</b> value acts as a percentage that determines the blend of the
        base color and a texturized color.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsEffectsTexture
