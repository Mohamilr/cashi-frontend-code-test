import { useState, useLayoutEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useLayoutEffect(() => {
    handleSize()

    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  const isMobile = windowSize.width <= 768
  const isLaptop = windowSize.width <= 1024

  return { ...windowSize, isMobile, isLaptop }
}
