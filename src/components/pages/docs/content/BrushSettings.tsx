import LabeledInfo from "components/LabeledInfo"
import BrushSettingsPic from "assets/img/brush-creator-tool-settings.png"
import SubHeader from "components/SubHeader"
import InfoList, { MarkerType } from "components/InfoList"
import SpacerVertical from "components/SpacerVertical"
import BrushSettingsFlow from "./brush-settings/BrushSettingsFlow"
import BrushSettingsFalloff from "./brush-settings/BrushSettingsFalloff"
import BrushSettingsShape from "./brush-settings/BrushSettingsShape"
import BrushSettingsGeneral from "./brush-settings/BrushSettingsGeneral"
import BrushSettingsScatter from "./brush-settings/BrushSettingsScatter"
import BrushSettingsJitter from "./brush-settings/BrushSettingsJitter"
import BrushSettingsEffects from "./brush-settings/BrushSettingsEffects"

const BrushSettings = () => {
  return (
    <>
      <LabeledInfo
        label="Brush Creator:"
        info="Window / Brush Creator"
        className="mb-4"
      />
      <img className="w-96 rounded-md mb-4" src={BrushSettingsPic} />
      <InfoList
        data={[
          { Text: "Back to the brush selection menu." },
          { Text: "Top navigation options." },
          { Text: "Brush stroke preview." },
          { Text: "Brush settings." },
        ]}
        marker={MarkerType.Letter}
      />
      <SpacerVertical />
      <SubHeader label="Brush Settings" />
      <BrushSettingsGeneral />
      <BrushSettingsShape />
      <BrushSettingsFalloff />
      <BrushSettingsFlow />
      <BrushSettingsScatter />
      <BrushSettingsJitter />
      <BrushSettingsEffects />
    </>
  )
}
export default BrushSettings
