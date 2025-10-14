import { useEffect, useRef } from "react"

interface Props {
  label: string
  indent: number
  href?: string
  active: boolean
  menu?: HTMLDivElement | null
}

const DocMenuItemLink = ({ label, indent, href, active, menu }: Props) => {
  const itemRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!menu || !active || !itemRef.current) {
      return
    }
    const itemOffsetTop = itemRef.current.offsetTop
    const menuHeight = menu.clientHeight
    const itemHeight = itemRef.current.clientHeight

    menu.scrollTo({
      top: itemOffsetTop - menuHeight / 2 + itemHeight / 2,
      behavior: "smooth",
    })
  }, [menu, active])

  return (
    <div ref={itemRef} style={{ marginLeft: `calc(${indent + "rem"} - 7px)` }}>
      <a
        className={`${
          active
            ? "opacity-100 text-yellow-400"
            : "hover:opacity-100 opacity-50"
        } transition-opacity font-normal`}
        href={active ? "" : href || "#"}
      >
        <div className="flex flex-row items-center lg:text-sm text-lg">
          <div
            className={`lg:h-7 h-12 w-px mr-3 opacity-50 ${
              active ? "bg-yellow-400" : "bg-neutral-400"
            }`}
          />
          {label}
        </div>
      </a>
    </div>
  )
}
export default DocMenuItemLink
