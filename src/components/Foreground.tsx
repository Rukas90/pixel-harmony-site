import { useForeground } from "./ForegroundContext"

const Foreground = () => {
  const { content } = useForeground()

  return (
    <div className="flex foreground-container overflow-x-hidden fixed justify-center pointer-events-none w-full max-w-full h-full top-0 left-0">
      <div className="w-full relative">
        {content && (
          <div className="fixed top-0 left-0 w-full h-full z-50">{content}</div>
        )}
      </div>
    </div>
  )
}
export default Foreground
