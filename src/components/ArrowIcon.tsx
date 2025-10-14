import { SvgIconProps } from "./types/SvgIconProps"

const ArrowIcon = ({ fill }: SvgIconProps) => {
  const color = fill

  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.4 15.375L6 13.975L12 7.97498L18 13.975L16.6 15.375L12 10.775L7.4 15.375Z"
        fill={color}
      />
    </svg>
  )
}
export default ArrowIcon
