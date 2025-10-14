interface Props {
    colorClass?: string
  }
  
  const VerticalLine = ({ colorClass = "bg-stone-800" }: Props) => {
    return <div className={`w-0.5 h-full ${colorClass} mx-4 opacity-25`} />
  }
  export default VerticalLine
  