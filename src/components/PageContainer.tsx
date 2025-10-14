import { ReactNode } from "react"
import ScreenFadeOut from "./ScreenFadeOut"

interface Props {
  children?: ReactNode
}
const PageContainer = ({ children }: Props) => {
  return (
    <>
      <div className="pt-[122px] text-start max-w-constraint mx-auto">
        {children}
      </div>
      <ScreenFadeOut />
    </>
  )
}

export default PageContainer
