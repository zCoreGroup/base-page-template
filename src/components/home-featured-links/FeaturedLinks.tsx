// components/FeaturedLinks.tsx
import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { FeaturedLinksData } from '@/types'
import { containerStyles, title } from './styles'

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <Box sx={containerStyles}>
      <Typography variant='h6' sx={title}>
        Featured Links
      </Typography>
      <Grid container sx={{ marginTop: '24px', justifyContent: 'center' }}>
        {data.links.map((link, index) => (
          <Button component='a' href={link.url} key={index} sx={{ marginRight: 2, marginTop: 2 }}>
            {link.name}
          </Button>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturedLinks
