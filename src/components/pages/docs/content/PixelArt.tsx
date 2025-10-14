import Paragraph from "components/Paragraph"

const PixelArt = () => {
  return (
    <>
      <Paragraph>
        There are multiple options available that allow for achieving
        pixel-perfect painting in Pixel Harmony.
        <br />
        <br />
        <b>Pixel Perfect:</b> This option is located at the top navigation bar
        above canvas. In 'Pixel Perfect' mode, anti-aliasing is deactivated,
        pressure sensitivity is disabled, and all semi-transparent pixels within
        the brush mask are solidified to either full opacity or complete
        transparency. This mode ensures crisp, precise pixel-level output,
        making it ideal for pixel art projects.
      </Paragraph>
    </>
  )
}
export default PixelArt
