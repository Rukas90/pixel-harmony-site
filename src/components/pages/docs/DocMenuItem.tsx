import DocMenuGroup from "./DocMenuGroup"
import { useLocation } from "react-router-dom"
import DocMenuItemLink from "./DocMenuItemLink"

export type DocMenuItemProps = {
  label: string
  href?: string
  items?: DocMenuItemProps[]
}
interface Props {
  items: DocMenuItemProps[]
  indent: number
  menu?: HTMLDivElement | null
}

const IsActive = (href?: string): boolean => {
  if (href === undefined || href === null) {
    return false
  }
  const location = useLocation()

  const normalizedHref = href.startsWith("/") ? href : `/${href}`

  return location.pathname === normalizedHref
}

const DocMenuItem = ({ items, indent, menu }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          {item.items ? (
            <DocMenuGroup
              label={item.label}
              items={item.items}
              indent={indent}
              menu={menu}
            />
          ) : (
            <DocMenuItemLink
              label={item.label}
              indent={indent}
              href={item.href}
              active={IsActive(item.href)}
              menu={menu}
            />
          )}
        </div>
      ))}
    </>
  )
}
export default DocMenuItem
