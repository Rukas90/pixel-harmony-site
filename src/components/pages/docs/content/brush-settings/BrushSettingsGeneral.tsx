import Paragraph from "components/Paragraph"
import BrushSettingsContainer from "./BrushSettingsContainer"

const BrushSettingsGeneral = () => {
  return (
    <BrushSettingsContainer header="General">
      <Paragraph>
        <b>General Settings</b> provide the base brush details, allowing
        modification of the <b>brush name</b> and assignment to a specific{" "}
        <b>group</b> by entering a group name. If the group name already exists,
        the brush will be placed in that group; otherwise, a new group will be
        created in the browse menu.
      </Paragraph>
    </BrushSettingsContainer>
  )
}
export default BrushSettingsGeneral
