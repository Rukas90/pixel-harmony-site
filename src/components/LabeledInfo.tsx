interface Props {
  label: string
  info: string
  className?: string
}

const LabeledInfo = ({ label, info, className }: Props) => {
  return (
    <p
      className={`relative text-stone-300 text-sm bg-custom-875 px-4 py-2 rounded-md overflow-hidden ${className}`}
    >
      <span className="absolute top-0 left-0 w-full h-px bg-stone-800" />
      <span className="text-yellow-400">{label} </span>
      <span>{info}</span>
    </p>
  )
}
export default LabeledInfo
