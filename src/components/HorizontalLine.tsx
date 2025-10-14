interface Props {
  colorClass?: string
  margin?: boolean
}

const HorizontalLine = ({
  colorClass = "bg-stone-800",
  margin = true,
}: Props) => {
  return (
    <div
      className={`w-full h-0.5 ${colorClass} ${margin && "my-4"} opacity-25`}
    />
  )
}
export default HorizontalLine
