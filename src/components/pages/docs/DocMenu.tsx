import { useMemo, useRef, useState } from "react"
import DocMenuItem, { DocMenuItemProps } from "./DocMenuItem"
import SearchField from "components/SearchField"
import CloseBtn from "components/CloseBtn"
import { useMediaQuery } from "react-responsive"
import MenuBtn from "components/MenuBtn"

interface Props {
  items: DocMenuItemProps[]
}
const DocMenu = ({ items }: Props) => {
  const [openState, setOpenState] = useState(false)
  const [filter, setFilter] = useState<string>("")
  const filteredItems = useMemo(() => {
    if (!filter.trim()) return items

    const filterLower = filter.toLowerCase()

    const filterRecursive = (items: DocMenuItemProps[]): DocMenuItemProps[] => {
      return items
        .map((item) => {
          if (item.items) {
            const filteredChildren = filterRecursive(item.items)
            if (
              filteredChildren.length > 0 ||
              item.label.toLowerCase().includes(filterLower)
            ) {
              return { ...item, items: filteredChildren }
            }
            return null
          } else {
            return item.label.toLowerCase().includes(filterLower) ? item : null
          }
        })
        .filter(Boolean) as DocMenuItemProps[]
    }

    return filterRecursive(items)
  }, [filter, items])

  const docsMenu = useRef<HTMLDivElement | null>(null)
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <>
      <div className="absolute left-0 bg-custom-875 w-full h-14 opacity-90 drop-shadow-xl lg:hidden flex px-3">
        <MenuBtn onClick={() => setOpenState(true)} />
      </div>
      <div
        className={`fixed lg:h-content h-full lg:pb-24 z-30 lg:top-auto top-0 lg:left-auto left-0 ${
          isDesktop || openState ? "block" : "hidden"
        }`}
      >
        <div
          className="lg:hidden block fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={() => setOpenState(false)}
        />
        <div className="relative h-full bg-stone-900 lg:w-72 rounded-lg lg:overflow-hidden">
          <div className="absolute w-1 h-full top-0 left-0 bg-custom-925" />
          <div className="flex flex-col h-full lg:py-6 py-3 px-1 text-stone-400">
            <div className="lg:hidden block p-5">
              <CloseBtn onClick={() => setOpenState(false)} />
            </div>
            <div className="lg:block hidden px-5">
              <SearchField onValueChanged={setFilter} />
            </div>
            <div
              ref={docsMenu}
              className="w-full h-full overflow-y-scroll px-6 scrollbar"
            >
              <DocMenuItem items={filteredItems} indent={0} menu={docsMenu.current} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DocMenu
