import IconListItem from "../../../IconListItem"
import NewPaletteIcon from "assets/img/misc/new-palette-icon.png"
import RemoveIcon from "assets/img/misc/Remove-Icon.png"
import ImportIcon from "assets/img/misc/Import-Icon.png"
import Paragraph from "../../../Paragraph"
import SubHeader from "../../../SubHeader"
import NoteBlock from "components/NoteBlock"
import SubContentContainer from "components/SubContentContainer"

const ColorTablesInfo = () => {
  return (
    <>
      <SubContentContainer header="Color Tables">
        <Paragraph>
          Color table is a row of 8 colors. Each color can be sampled by
          hovering over a color block and clicking the left mouse button.
          <br />
          <br />
          To edit a color, while hovering press right mouse button. This will
          prompt the color picker window to open, which will then allow you to
          edit the color.
        </Paragraph>
        <ul className="mt-6">
          <IconListItem
            icon={NewPaletteIcon}
            text="- Create new color table"
            className="rounded-t-md"
          />
          <IconListItem
            icon={RemoveIcon}
            text="- Delete the selected color table from the gallery"
            note="To select the table hover over it and press middle mouse button"
          />
          <IconListItem
            icon={ImportIcon}
            text="- Import colors to this color gallery"
            note="<b>Supported formats:</b> .aco"
            className="rounded-b-md"
          />
        </ul>
        <NoteBlock text="To sample a color, hover over the desired color block and right click with your mouse. To edit the color left click with your mouse instead which will prompt a color picker to open." />
      </SubContentContainer>
    </>
  )
}
export default ColorTablesInfo
