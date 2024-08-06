import { useEffect, useRef } from 'react'

export const useAutoSlide = (
  imagesLength: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  delay: number
) => {
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagesLength)
      }, delay)
    }

    const clearAutoSlide = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }

    startAutoSlide()

    return () => clearAutoSlide()
  }, [imagesLength, delay, setActiveIndex])

  return {
    pauseAutoSlide: () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    },
    resumeAutoSlide: () => {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagesLength)
      }, delay)
    },
  }
}
