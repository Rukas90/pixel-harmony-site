import Paragraph from "components/Paragraph"
import BrushToolIcon from "assets/img/brush-tool-icon.png"
import BrushMainSettingsInfo from "./brush-tool/BrushMainSettingsInfo"
import BrushColorExample from "assets/img/paint-color-example.gif"
import BrushBlendModeExample from "assets/img/paint-blend-mode-example.gif"
import Link from "components/Link"
import BrushBrowseMenu from "assets/img/brush-selection-menu.jpg"

const PaintingTools = () => {
  return (
    <div>
      <Paragraph>
        <span className="inline">
          To select the brush tool click of the brush tool icon{" "}
        </span>
        <span>
          <img className="w-4 inline mx-1" src={BrushToolIcon} />
        </span>
        <span className="inline"> in the right side toolbar ribbon.</span>

        <span className="block">
          There are multiple tool options available. These options affect how
          the brush tool paints its stroke. These settings are applied to
          whatever brush you have selected.
        </span>
      </Paragraph>

      <div className="flex flex-row gap-4 mt-4">
        <div>
          <img src={BrushColorExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Color</Paragraph>
        </div>
        <div>
          <img src={BrushBlendModeExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Blend Mode</Paragraph>
        </div>
      </div>
      <div className="my-4">
        <Paragraph>
          Blend mode sets the method for how the color you paint blends with the
          underlying existing pixels.
          <br />
          Paint modes are similar to layer blending modes. See{" "}
          <Link href="/docs/blending-modes">Blending modes</Link>.
        </Paragraph>
      </div>
      <BrushMainSettingsInfo />
      <Paragraph>
        Brush can be selected by going to the 'Brush' tab and choosing a brush
        from the available brush browse menu.
      </Paragraph>
      <img className="my-4 rounded-md" src={BrushBrowseMenu} />
      <Paragraph>
        <b>Flatten Alpha:</b> If enabled, it flattens the brush mask values so
        that all values become either 0 or 1. Suitable for{" "}
        <Link href="/docs/pixel-art">Pixel Art</Link> painting.
      </Paragraph>
    </div>
  )
}
export default PaintingTools
