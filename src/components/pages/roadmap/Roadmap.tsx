import Entries from "assets/res/Roadmap.json"
import Button from "components/Button"
import HorizontalLine from "components/HorizontalLine"
import Paragraph from "components/Paragraph"
import VerticalLine from "components/VerticalLine"
import RoadmapEntryItem from "./RoadmapEntryItem"

export type RoadmapEntry = {
  Name: string
  Status: number
  Version?: string
}

const Roadmap = () => {
  return (
    <div className="w-full lg:p-12 px-4 pt-8 pb-4 flex flex-col justify-center">
      <Paragraph className="text-center mb-6">
        Explore future plans and submit your feedback and suggestions.
      </Paragraph>
      <Button
        className="font-semibold mb-12 text-sm mx-auto"
        href="mailto:rukas.skirkevicius@gmail.com"
        target="_self"
      >
        Send Feedback and Suggestions
      </Button>
      <div className="relative w-full text-sm bg-custom-875 p-4 rounded-md overflow-hidden">
        <div className="top-0 left-0 w-full absolute h-px bg-custom-775" />
        <div className="w-full h-full overflow-x-scroll scrollbar">
          <div className="w-full min-w-[600px]">
            <div className="w-full font-semibold text-stone-400 flex justify-between px-4 py-3">
              <div>Feature name</div>
              <div className="flex">
                <div className="w-24 text-center">Completed</div>
                <VerticalLine />
                <div className="w-24 text-center">In Progress</div>
                <VerticalLine />
                <div className="w-24 text-center">In Research</div>
              </div>
            </div>
            <HorizontalLine />
            {Entries.map((entry) => (
              <RoadmapEntryItem {...entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
