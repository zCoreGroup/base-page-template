// components/customindicator.tsx
import React from 'react'
import { Box, Button } from '@mui/material'

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
          onClick={() => onClick(index + 1)}
          sx={{
            backgroundColor: activeIndex === index + 1 ? '#e74c3c' : '#fff',
            color: activeIndex === index + 1 ? '#fff' : '#000',
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
    </Box>
  )
}

export default CustomIndicator
