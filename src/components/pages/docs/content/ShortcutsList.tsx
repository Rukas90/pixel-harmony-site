import list from "assets/res/Shortcuts.json"
import NoteBlock from "components/NoteBlock"

const ShortcutsList = () => {
  return (
    <div>
      <ul className="text-start sm:text-base text-sm text-stone-200">
        {list.map((item, index) => (
          <li
            key={index}
            className={`relative overflow-hidden flex flex-col py-2 px-4 ${
              index % 2 === 0 ? "bg-custom-925" : "bg-custom-875"
            } ${index < 1 && "rounded-t-lg"} ${
              index > list.length - 2 && "rounded-b-lg"
            }`}
          >
            <div className="absolute w-full h-px top-0 left-0 bg-stone-800" />
            <span className="font-semibold">{item.label}</span>
            <span className="text-sm text-stone-400">{item.value}</span>
          </li>
        ))}
      </ul>
      <NoteBlock text="Currently there are no way in configuring custom shortcuts." />
    </div>
  )
}

export default ShortcutsList
