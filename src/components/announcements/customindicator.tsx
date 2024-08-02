// components/customindicator.tsx
import React from 'react'
import { Box, Button, Typography } from '@mui/material'

interface CustomIndicatorProps {
  length: number
  activeIndex: number
  onClick: (index: number) => void
}

const CustomIndicator: React.FC<CustomIndicatorProps> = ({ length, activeIndex, onClick }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      {Array.from({ length }).map((_, index) => (
        <Button
          key={index}
          data-testid={`custom-indicator-${index}`}
          onClick={() => onClick(index)}
          sx={{
            backgroundColor: activeIndex === index ? '#e74c3c' : '#fff',
            color: activeIndex === index ? '#fff' : '#000',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            minWidth: '30px',
            margin: '0 5px',
            padding: '0',
          }}
        >
          {index + 1}
        </Button>
      ))}
      <Typography data-testid='active-index' sx={{ display: 'none' }}>
        {activeIndex}
      </Typography>
    </Box>
  )
}

export default CustomIndicator
