interface Props {
  text: string
}

const NoteBlock = ({ text }: Props) => {
  return (
    <p className="px-4 py-2 mt-4 bg-custom-925 text-stone-400 text-sm rounded-md border border-custom-850">
      <span>
        <b>Note: </b>
      </span>
      <span>{text}</span>
    </p>
  )
}
export default NoteBlock
