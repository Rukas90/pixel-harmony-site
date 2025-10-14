interface Props {
  url: string
  icon: string
}

const SocialIconBtn = ({ url, icon }: Props) => {
  return (
    <a href={url} target="_blank">
      <img
        className="w-5 opacity-50 hover:opacity-100 transition-opacity"
        src={icon}
      />
    </a>
  )
}

export default SocialIconBtn
