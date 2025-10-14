import Modes from "assets/res/BlendingModes.json"
import IconListItem from "components/IconListItem"
import SubContentContainer from "components/SubContentContainer"

const BlendingModes = () => {
  return (
    <>
      {Modes.map((group) => (
        <>
          <SubContentContainer
            key={`BlendModeInfo_${group.Category}`}
            header={group.Category}
            collapsable
          >
            <ul>
              {group.Modes.map((mode, index) => (
                <IconListItem
                  key={`BlendMode_${group.Category}_${mode.Name}`}
                  icon={null}
                  text={mode.Name}
                  note={mode.Summary}
                  className={`${
                    index === 0
                      ? "rounded-t-md"
                      : index === group.Modes.length - 1
                      ? "rounded-b-md"
                      : undefined
                  }`}
                />
              ))}
            </ul>
          </SubContentContainer>
        </>
      ))}
      <SubContentContainer header="Examples">
        <table className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 auto-rows-auto sm:w-auto w-full mr-auto xl:gap-4 gap-2">
          {Modes.map((group) =>
            group.Modes.map((mode, index) => (
              <div
                className="relative flex flex-col items-center"
                key={`BlendModeExample_${index}`}
              >
                <img className="rounded-md drop-shadow-lg" src={mode.Example} />
                <p className="relative xl:absolute drop-shadow-2xl xl:bg-custom-875 xl:px-2 xl:py-1 xl:mt-0 mt-2 rounded-md text-stone-200 xl:text-xs text-sm bottom-0 mb-2">
                  {mode.Name}
                </p>
              </div>
            ))
          )}
        </table>
      </SubContentContainer>
    </>
  )
}
export default BlendingModes
