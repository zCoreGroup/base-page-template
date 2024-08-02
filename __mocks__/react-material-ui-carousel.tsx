import React, { ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode
  index?: number
  onChange?: (now?: number, previous?: number) => void
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div>
      {children}
      <button aria-label='Next'>Next</button>
      <button aria-label='Previous'>Previous</button>
    </div>
  )
}

export default Carousel
