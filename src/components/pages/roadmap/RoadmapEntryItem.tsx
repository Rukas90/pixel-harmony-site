import VerticalLine from "components/VerticalLine"
import Dot from "./Dot"
import { RoadmapEntry } from "./Roadmap"
import Paragraph from "components/Paragraph"

const RoadmapEntryItem = ({
  Name: name,
  Status: status,
  Version: version,
}: RoadmapEntry) => {
  return (
    <div>
      <div className="w-full flex justify-between bg-custom-925 px-4 py-3 rounded-md drop-shadow-md mb-2 text-stone-300">
        <div>{name}</div>
        <div className="flex">
          <div className="w-24 flex">
            {status === 0 && (
              <Paragraph className="m-auto">{version}</Paragraph>
            )}
          </div>
          {/* Completed */}
          <VerticalLine />
          <div className="w-24 flex">{status === 1 && <Dot />}</div>{" "}
          {/* In Progress */}
          <VerticalLine />
          <div className="w-24 flex">{status === 2 && <Dot />}</div>{" "}
          {/* In Research */}
        </div>
      </div>
    </div>
  )
}
export default RoadmapEntryItem
