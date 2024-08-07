'use client'

import EventCard from '@/components/event-card/EventCard'
import CustomIndicator from '@/components/announcements/customindicator'
import React, { useState, useEffect, useRef } from 'react'
import { Box } from '@mui/material'

export interface EventItem {
  id: string
  title: string
  description: string
  image: string
}

interface EventCardSectionProps {
  eventItems: EventItem[]
  minCardHeight: number
}

export default function EventCardSection({ eventItems, minCardHeight }: EventCardSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<EventItem[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight
        const cardsPerPage = Math.floor(containerHeight / minCardHeight)
        const startIndex = activeIndex * cardsPerPage
        const endIndex = Math.min(startIndex + cardsPerPage, eventItems.length)
        setVisibleCards(eventItems.slice(startIndex, endIndex))
        setTotalPages(Math.ceil(eventItems.length / cardsPerPage))
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [eventItems, minCardHeight, activeIndex])

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index - 1)
  }

  return (
    <>
      <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
        {visibleCards.map((item) => (
          <EventCard key={item.id} {...item} />
        ))}
      </Box>
      <CustomIndicator length={totalPages} activeIndex={activeIndex + 1} onClick={handleIndicatorClick} />
    </>
  )
}
