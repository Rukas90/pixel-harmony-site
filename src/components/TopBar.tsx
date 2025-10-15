import logo from "assets/LogoVector.png"
import TopBarNavItem from "./TopBarNavItem"
import assetstore from "assets/socials/unity.png"
import youtube from "assets/socials/youtube.png"
import mail from "assets/socials/mail.png"
import discord from "assets/socials/discord.png"
import SocialIconBtn from "./SocialIconBtn"
import Button from "./Button"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import MenuBtn from "./MenuBtn"

const TopBar = () => {
  const [openState, setOpenState] = useState(false)
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <div className="flex flex-col w-full fixed max-h-topbar z-10 drop-shadow-2xl">
      <div className="w-full bg-stone-900 px-8 py-4 h-[80px">
        <div className="max-w-constraint text-start flex flex-row items-center justify-between mx-auto">
          <div className="flex flex-row items-center h-full">
            <img src={logo} className="w-9 mr-4" />
            <h1 className="text-stone-200 font-medium tracking-wide md:text-md sm:text-lg">
              PIXEL HARMONY
            </h1>
          </div>
          <div
            className={`lg:hidden block fixed top-0 left-0 w-dvw h-dvh bg-black opacity-50 ${
              isDesktop || openState ? "block" : "hidden"
            }`}
            onClick={() => setOpenState(false)}
          />
          <ul
            className={`lg:relative fixed lg:p-0 p-6 lg:rounded-none rounded-md lg:drop-shadow-none drop-shadow-xl lg:top-auto top-4 lg:right-auto right-4 flex lg:flex-row flex-col gap-6 text-stone-400 lg:bg-transparent z-30 bg-custom-850 ${
              isDesktop || openState ? "block" : "hidden"
            }`}
          >
            <TopBarNavItem label="Home" href="/" />
            <TopBarNavItem label="Documentation" href="docs" />
            <TopBarNavItem label="Roadmap" href="roadmap" />
            <TopBarNavItem label="Support" href="support" />
            <Button
              className="block lg:hidden"
              href="https://assetstore.unity.com/packages/tools/painting/pixel-harmony-202614"
              target="_blank"
            >
              Buy Now
            </Button>
          </ul>
          <div className="flex lg:hidden">
            <MenuBtn
              onClick={() => setOpenState(true)}
              className="my-auto mr-3"
            />
          </div>
          <Button
            className="hidden lg:block"
            href="https://assetstore.unity.com/packages/tools/painting/pixel-harmony-202614"
            target="_blank"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="bg-stone-800 w-full px-8 py-2 h-[42px]">
        <div className="flex justify-between items-center max-w-constraint mx-auto">
          <p className="text-stone-400 text-sm sm:block hidden">
            Copyright © {new Date().getUTCFullYear().toString()}{" "}
            <span className="font-semibold">OVector Technologies</span>
          </p>
          <div className="flex flex-row gap-4">
            <SocialIconBtn
              url="https://assetstore.unity.com/publishers/8326"
              icon={assetstore}
            />
            <SocialIconBtn
              url="https://www.youtube.com/user/WatchFindDoMedia"
              icon={youtube}
            />
            <SocialIconBtn url="mailto:watchfinddo@gmail.com" icon={mail} />
            <SocialIconBtn url="https://discord.gg/ZRXUJUw" icon={discord} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
