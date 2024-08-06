'use client'
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import * as styles from './styles'
import { HeroBannerData } from '@/types'
import Image from 'next/image'
import { useAutoSlide } from './useAutoSlide'

interface HeroBannerProps {
  data: HeroBannerData
}

const getImageStyle = (index: number, activeIndex: number) => (activeIndex === index ? styles.activeThumbnail : {})

const getThumbnailButtonStyle = (index: number, activeIndex: number) => ({
  ...styles.thumbnailButton,
  border: activeIndex === index ? '2px solid white' : '1px solid black',
})

const HeroBanner: React.FC<HeroBannerProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const images = Array.isArray(data?.images) ? data.images : []
  const getProxiedImageUrl = (uuid: string) => `/api/file-proxy?uuid=${encodeURIComponent(uuid)}`
  const { pauseAutoSlide, resumeAutoSlide } = useAutoSlide(images.length, setActiveIndex, 5000)

  return (
    <Box sx={styles.container} onMouseEnter={pauseAutoSlide} onMouseLeave={resumeAutoSlide}>
      <Box sx={styles.mainImage}>
        <Image
          src={getProxiedImageUrl(images[activeIndex].source)}
          alt={images[activeIndex].title}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box sx={styles.textOverlay}>
        <Typography sx={styles.title}>{images[activeIndex].title}</Typography>
        <Typography sx={styles.heading}>{images[activeIndex].heading}</Typography>
        <Typography sx={styles.subheading}>{images[activeIndex].subheading}</Typography>
      </Box>
      <Box sx={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <Box key={image.id} sx={styles.thumbnailWrapper}>
            <Box onClick={() => setActiveIndex(index)} sx={getThumbnailButtonStyle(index, activeIndex)}>
              <Image
                src={getProxiedImageUrl(image.source)}
                alt={`thumbnail ${index}`}
                fill={true}
                style={{ ...getImageStyle(index, activeIndex), objectFit: 'cover' }}
              />
            </Box>
            <Typography sx={styles.imgCaption}>{image.imgCaption}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default HeroBanner
