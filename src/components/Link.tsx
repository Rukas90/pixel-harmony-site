import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  href: string
  target?: string
}

const Link = ({ children, href, target = "_blank" }: Props) => {
  return (
    <a className="text-yellow-400" target={target} href={href}>
      {children}
    </a>
  )
}
export default Link
