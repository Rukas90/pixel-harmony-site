import Button from "components/Button"
import Paragraph from "components/Paragraph"

const Support = () => {
  return (
    <div className="flex w-full h-content">
      <div className="w-full h-fit p-12 flex flex-col justify-center m-auto">
        <p className="text-stone-300 text-xl font-semibold text-center mb-6">
          Need some help?
        </p>
        <Paragraph className="text-center mb-8">
          Have questions or need to report an issue? Please do not hesitate to
          contact
        </Paragraph>
        <Button
          className="m-auto"
          href="mailto:rukas.skirkevicius@gmail.com"
          target="_self"
        >
          Send Email
        </Button>
      </div>
    </div>
  )
}

export default Support
