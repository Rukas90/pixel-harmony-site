import { useLocation } from "react-router-dom"

interface Props {
  label: string
  href: string
}

const NormalizeHref = (href: string): string => {
  return href.startsWith("/") ? href : `/${href}`
}
const TopBarNavItem = ({ label, href }: Props) => {
  const location = useLocation()

  const normalizedHref = NormalizeHref(href)
  const isHome = normalizedHref === "/"
  const isActive = isHome
    ? location.pathname === normalizedHref
    : location.pathname.startsWith(normalizedHref)

  return (
    <li
      className={`transition-colors px-4 py-2 rounded-md ${
        !isActive && "hover:text-stone-200 hover:bg-stone-800"
      } ${isActive && "text-stone-800 bg-stone-200 font-medium"}`}
    >
      {!isActive ? <a href={normalizedHref}>{label}</a> : label}
    </li>
  )
}

export default TopBarNavItem
