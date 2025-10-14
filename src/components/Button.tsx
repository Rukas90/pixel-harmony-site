import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
}

const Button = ({ children, className, onClick, href, target }: Props) => {
  return (
    <button
      className={`bg-stone-800 hover:bg-stone-300 px-4 py-2 text-stone-300 hover:text-custom-875 rounded-md transition-colors ${className}`}
      onClick={onClick}
    >
      <a href={href} target={target}>
        {children}
      </a>
    </button>
  )
}
export default Button
