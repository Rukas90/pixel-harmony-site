import InstallationSteps from "assets/res/InstallationSteps.json"
import InfoList from "components/InfoList"
import NoteBlock from "components/NoteBlock"
import SpacerVertical from "components/SpacerVertical"

const InstallationInfo = () => {
  return (
    <>
      <InfoList data={InstallationSteps} />
      <SpacerVertical />
      <NoteBlock text="Please ensure you have validated the compatibility before importing the source files." />
    </>
  )
}
export default InstallationInfo
