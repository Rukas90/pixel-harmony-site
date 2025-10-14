import { ReactNode } from "react"
import ShortcutsList from "components/pages/docs/content/ShortcutsList"
import ColorGalleryInfo from "components/pages/docs/content/ColorGalleryInfo"
import BrushesManagementInfo from "components/pages/docs/content/BrushesManagementInfo"
import ModificatorInfo, {
  ModificatorData,
} from "components/pages/docs/content/ModificatorInfo"
import BlendingModes from "components/pages/docs/content/BlendingModes"
import CreateBrushes from "components/pages/docs/content/CreateBrushes"
import BrushSettings from "components/pages/docs/content/BrushSettings"
import PaintingTools from "components/pages/docs/content/PaintingTools"
import PixelArt from "components/pages/docs/content/PixelArt"
import InstallationInfo from "components/pages/docs/content/InstallationInfo"

export const ContentMap: { [key: string]: (props?: any) => ReactNode } = {
  Shortcuts: () => <ShortcutsList />,
  ColorGallery: () => <ColorGalleryInfo />,
  BrushesManagement: () => <BrushesManagementInfo />,
  Modificator: (data: ModificatorData) => <ModificatorInfo data={data} />,
  BlendingModes: () => <BlendingModes />,
  CreateBrushes: () => <CreateBrushes />,
  BrushSettings: () => <BrushSettings />,
  PaintingTools: () => <PaintingTools />,
  PixelArt: () => <PixelArt />,
  Installation: () => <InstallationInfo />,
}
