import LabeledInfo from "components/LabeledInfo"
import Paragraph from "components/Paragraph"
import BrushCreatorTool from "assets/img/brush-creator-tool.jpg"
import BrushCreatorToolOpen from "assets/img/brush-creator-tool-open.jpg"

const BrushesManagementInfo = () => {
  return (
    <>
      <Paragraph className="mb-4">
        Brushes can be managed through the Brush Creator tool within Pixel
        Harmony, where all available brushes can be viewed, edited, duplicated,
        or deleted.
      </Paragraph>
      <LabeledInfo label="Brush Creator:" info="Window / Brush Creator" />
      <img className="w-48 mt-4 rounded-md" src={BrushCreatorToolOpen} />
      <img className="w-80 mt-4 rounded-md" src={BrushCreatorTool} />
    </>
  )
}
export default BrushesManagementInfo
