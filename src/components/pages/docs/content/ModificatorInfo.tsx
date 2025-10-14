import PropertyBlock from "components/PropertyBlock"
import LabeledInfo from "components/LabeledInfo"
import SubContentContainer from "components/SubContentContainer"
import ImageReveal from "components/ImageReveal"

export interface ModificatorData {
  Path: string
  Properties: ModificatorProperty[]
  Info?: ModificatorInfo
  Preview: ModificatorPreview
}
type ModificatorProperty = {
  Name: string
  Type: string
  Summary: string
}
type ModificatorInfo = {
  Label: string
  Text: string
}
type ModificatorPreview = {
  Original: string
  Adjusted: string
}
interface Props {
  data: ModificatorData
}

const ModificatorInfo = ({ data }: Props) => {
  return (
    <>
      <LabeledInfo label="Path: " info={data.Path} />

      <SubContentContainer header="Properties">
        {data.Properties && (
          <ul>
            {data.Properties.map((value, index) => (
              <PropertyBlock
                key={`PropertyBlock_${index}`}
                label={value.Name}
                type={value.Type}
                summary={value.Summary}
                className={`${
                  index == 0
                    ? "rounded-t-md"
                    : index == data.Properties.length - 1
                    ? "rounded-b-md"
                    : undefined
                }`}
              />
            ))}
          </ul>
        )}
        {!data.Properties && (
          <LabeledInfo
            label="Note:"
            info="This modification is applied instantly without any additional controls."
            className="mt-6"
          />
        )}
      </SubContentContainer>
      {data.Info && (
        <LabeledInfo
          label={data.Info.Label}
          info={data.Info.Text}
          className="mt-6"
        />
      )}

      <SubContentContainer header="Preview">
        <ImageReveal
          imageASrc={data.Preview.Original}
          imageAAlt="Original"
          imageBSrc={data.Preview.Adjusted}
          imageBAlt="Adjusted"
        />
      </SubContentContainer>
    </>
  )
}
export default ModificatorInfo
