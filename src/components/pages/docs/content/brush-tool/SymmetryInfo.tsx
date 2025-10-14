import LabeledInfo from "components/LabeledInfo"
import Paragraph from "components/Paragraph"
import DualSymmetryExample from "assets/img/dual-symmetry-example.gif"
import HorizontalSymmetryExample from "assets/img/horizontal-symmetry-example.gif"
import VerticalSymmetryExample from "assets/img/vertical-symmetry-example.gif"

const SymmetryInfo = () => {
  return (
    <>
      <LabeledInfo
        label="Symmetry options: "
        info="None, Horizontal, Vertical, Dual"
        className="my-4"
      />
      <div className="flex flex-row gap-4">
        <div>
          <img src={HorizontalSymmetryExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Horizontal</Paragraph>
        </div>
        <div>
          <img src={VerticalSymmetryExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Vertical</Paragraph>
        </div>
        <div>
          <img src={DualSymmetryExample} className="rounded-md" />
          <Paragraph className="text-center mt-1">Dual</Paragraph>
        </div>
      </div>
    </>
  )
}
export default SymmetryInfo
