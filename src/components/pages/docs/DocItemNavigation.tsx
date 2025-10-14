import ArrowIcon from "../../ArrowIcon"
import { DocMenuItemProps } from "./DocMenuItem"
import HorizontalLine from "../../HorizontalLine"

interface Props {
  menu: DocMenuItemProps[]
  index: number | null
}

const DocItemNavigation = ({ menu, index }: Props) => {
  if (index === null || menu === null) {
    return <></>
  }
  const hasPrev = index > 0
  const hasNext = index < menu.length - 1

  return (
    <>
      <div
        className={`flex flex-row mb-4 ${
          hasPrev && hasNext
            ? "justify-between"
            : hasNext
            ? "justify-end"
            : "justify-start"
        }`}
      >
        {hasPrev && (
          <a
            href={menu[index - 1].href}
            className="opacity-65 hover:opacity-100 transition-opacity"
          >
            <div className="flex flex-row items-center">
              <div className="w-6 h-6 -rotate-90">
                <ArrowIcon fill="#FFFFFF" />
              </div>
              <p className="text-stone-200 text-sm">{menu[index - 1].label}</p>
            </div>
          </a>
        )}
        {hasNext && (
          <a
            href={menu[index + 1].href}
            className="opacity-65 hover:opacity-100 transition-opacity"
          >
            <div className="flex flex-row items-center">
              <p className="text-stone-200 text-sm">{menu[index + 1].label}</p>
              <div className="w-6 h-6 rotate-90">
                <ArrowIcon fill="#FFFFFF" />
              </div>
            </div>
          </a>
        )}
      </div>
      <HorizontalLine />
    </>
  )
}
export default DocItemNavigation
