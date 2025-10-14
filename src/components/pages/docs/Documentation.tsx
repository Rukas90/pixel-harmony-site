import { useEffect, useState } from "react"
import { DocMenuItemProps } from "./DocMenuItem"
import DocMenuItems from "../../../assets/res/DocMenu.json"
import { useNavigate, useLocation } from "react-router-dom"
import DocInfoContent from "./DocInfoContent"
import DocMenu from "./DocMenu"
import Page404Message from "../../Page404Message"
import SpacerVertical from "../../SpacerVertical"
import { ContentMap } from "../../types/ContentMap"
import DocItemNavigation from "./DocItemNavigation"

export type Info = {
  DisplayTitle: string
  Label?: string
  Category: string
  Description: string
}
type Content = {
  Key: string
  Data?: any
}
type ContentFile = {
  Info: Info
  Content?: Content
}
const FlattenMenu = (menu: DocMenuItemProps[]): DocMenuItemProps[] => {
  let flatMenu: DocMenuItemProps[] = []

  menu.forEach((section) => {
    section.items?.forEach((item) => {
      if (item.items) {
        item.items.forEach((subItem) => flatMenu.push(subItem))
      } else {
        flatMenu.push(item)
      }
    })
  })
  return flatMenu
}
const Documentation = () => {
  const [active, setActive] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [content, setContent] = useState<ContentFile | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const location = useLocation()
  const navigate = useNavigate()

  const flatMenu = FlattenMenu(DocMenuItems)

  useEffect(() => {
    if (location.pathname === "/docs") {
      navigate(flatMenu[0].href ?? "/docs/requirements")

      return
    }
    const startIndex = location.pathname.indexOf("docs/")
    if (startIndex !== -1) {
      const activePath = location.pathname.substring(
        startIndex + "docs/".length
      )
      setActive(activePath)

      const currentIndex = flatMenu.findIndex((item) =>
        item.href?.endsWith(activePath)
      )
      if (currentIndex !== -1) {
        setActiveIndex(currentIndex)
      }
    } else {
      setActive(null)
      setActiveIndex(null)
    }
  }, [location, navigate])

  useEffect(() => {
    if (active) {
      const loadContent = async () => {
        try {
          setLoading(true)
          const contentData = await import(`assets/pages/${active}.json`)
          setContent(contentData.default)
        } catch (error) {
          console.error("Error loading content:", error)
          setContent(null)
        } finally {
          setLoading(false)
        }
      }
      loadContent()
    }
  }, [active])

  return (
    <div className="relative w-full min-h-content lg:py-12 pb-6 px-6 flex flex-row">
      <DocMenu items={DocMenuItems} />
      <div className="flex flex-col lg:w-docpage w-full relative grow lg:pl-12 lg:ml-72 lg:mt-0 mt-20">
        <DocItemNavigation menu={flatMenu} index={activeIndex} />
        {active && content ? (
          <div>
            <DocInfoContent
              info={content.Info}
              menu={flatMenu}
              index={activeIndex}
            />
            {content.Content && ContentMap[content.Content.Key] && (
              <>
                <SpacerVertical />
                {ContentMap[content.Content.Key](content.Content.Data)}
              </>
            )}
          </div>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <Page404Message />
        )}
      </div>
    </div>
  )
}
export default Documentation
