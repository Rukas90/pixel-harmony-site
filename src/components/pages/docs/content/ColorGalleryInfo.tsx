import ColorTablesInfo from "./ColorTablesInfo"
import CollectionIcon from "assets/img/misc/Collection-Icon.png"
import RemoveIcon from "assets/img/misc/Remove-Icon.png"
import IconListItem from "../../../IconListItem"
import NoteBlock from "../../../NoteBlock"

const ColorGalleryInfo = () => {
  return (
    <>
      <ul>
        <IconListItem
          icon={CollectionIcon}
          text="- Create new color gallery"
          className="rounded-t-md"
        />
        <IconListItem
          icon={RemoveIcon}
          text="- Delete the selected color gallery"
          note="To select the color gallery hover over it and press left mouse button"
          className="rounded-b-md"
        />
      </ul>
      <NoteBlock text="To rename a created gallery, simply hover over the gallery button and right-click to enable editing. Once the name field is active, enter the desired name and press Enter to confirm the change." />
      <ColorTablesInfo />
    </>
  )
}
export default ColorGalleryInfo
