import SearchIcon from "assets/search.svg"

interface Props {
  onValueChanged: (newValue: string) => void
}
const SearchField = ({ onValueChanged }: Props) => {
  return (
    <div className="relative flex items-center mb-6">
      <input
        placeholder="Search..."
        className="w-full px-10 m-0 py-1.5 rounded-md outline-0 placeholder-stone-400 text-stone-200 bg-stone-950 hover:bg-stone-800 focus:bg-stone-800 focus:opacity-100 transition-colors opacity-50"
        onChange={(event) => onValueChanged(event.target.value)}
      />
      <div className="absolute w-5 h-5 ml-2 opacity-50">
        <img src={SearchIcon} />
      </div>
    </div>
  )
}
export default SearchField
