import BrushCreateList from "assets/res/CreateBrushProcessList.json"
import InfoList from "components/InfoList"

const CreateBrushes = () => {
  return (
    <>
      <InfoList data={BrushCreateList} />
    </>
  )
}
export default CreateBrushes
