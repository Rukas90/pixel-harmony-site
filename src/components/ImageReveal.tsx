import React, { useRef, useEffect, useState } from "react"

interface Props {
  imageASrc: string
  imageAAlt: string
  imageBSrc: string
  imageBAlt: string
}

const ImageReveal = ({ imageASrc, imageAAlt, imageBSrc, imageBAlt }: Props) => {
  const [sliderValue, setSliderValue] = useState(0.5)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const [draggingState, setDraggingState] = useState(false)
  const requestRef = useRef<number | null>(null)

  const updateSliderValue = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const relativePosition = (clientX - rect.left) / rect.width

      setSliderValue(Math.max(0, Math.min(1, relativePosition)))
    }
  }
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    setDraggingState(true)

    updateSliderValue(e.clientX)
  }
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) {
      return
    }
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current)
    }
    requestRef.current = requestAnimationFrame(() =>
      updateSliderValue(e.clientX)
    )
  }
  const handleMouseUp = () => {
    isDragging.current = false
    setDraggingState(false)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value))
  }
  return (
    <>
      <div
        ref={containerRef}
        className={`relative ${
          draggingState ? "cursor-ew-resize" : "cursor-grab"
        } bg-custom-925 image-reveal drop-shadow-lg rounded-md overflow-hidden lg:max-w-auto max-w-full`}
        onMouseDown={handleMouseDown}
      >
        <img
          alt={imageBAlt}
          src={imageBSrc}
          className="w-full h-auto object-cover select-none pointer-events-none rounded-b-xl"
        />
        <img
          alt={imageAAlt}
          src={imageASrc}
          className="absolute top-0 left-0 w-full h-auto object-cover select-none rounded-b-xl pointer-events-none"
          style={{
            clipPath: `inset(0 ${sliderValue * 100}% 0 0)`,
          }}
        />
        <div className="absolute flex flex-col w-full h-full top-0 left-0 items-end justify-end">
          <div className="relative flex w-full h-8 bg-custom-925">
            <span className="absolute top-0 left-0 w-full h-px bg-stone-800" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full mx-3 my-auto slider"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default ImageReveal
