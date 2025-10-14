import FAQContent from "./FAQContent"
import LabeledBox from "components/LabeledBox"

const Home = () => {
  return (
    <div className="h-full md:pt-16 sm:p-8 px-4 pb-4 pt-8">
      <div className="flex flex-col h-full">
        <div>
          <p className="text-center text-2xl text-stone-200 font-light">
            ENHANCE YOUR <span className="font-semibold">CREATIVITY</span> |
            IMPROVE YOUR <span className="font-semibold">WORKFLOW</span>
          </p>
        </div>

        <LabeledBox
          label="What is Pixel Harmony?"
          content={
            <p className="text-stone-200">
              Pixel Harmony is an image editing plugin for the Unity engine. It
              offers an array of image manipulation tools, extending your
              creative scope without leaving the Unity environment.
              <br />
              <br />
              Greatly minimize the back-and-forth with external software. With
              Pixel Harmony, enjoy the convenience of making timely, efficient
              edits to your images within the Unity workspace.
              <br />
              <br />
              Furthermore, significant attention was put into designing a user
              interface that is both straightforward and intuitive, ensuring a
              welcoming experience for new users. Pixel Harmony is your
              invitation to explore image editing with ease and efficiency.
            </p>
          }
          defaultFoldout
        />
        <LabeledBox
          label="Frequently Asked Questions"
          content={<FAQContent />}
          defaultFoldout={false}
        />
      </div>
    </div>
  )
}

export default Home
