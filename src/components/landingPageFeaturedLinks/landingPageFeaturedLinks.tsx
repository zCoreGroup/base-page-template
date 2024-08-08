import React from 'react'
import { Box, Grid, Typography, Pagination, Card, CardMedia, Link } from '@mui/material'
import { FeaturedLinksData } from '@/types'
import { title, card } from './styles'

const LandingPageFeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <React.Fragment>
      <Box sx={{ paddingLeft: '20px' }}>
        <Typography variant='h6' sx={title}>
          Featured Links
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: '1em' }}>
          {data.links.map((link, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Link href={link.url} target='_blank' rel='noopener noreferrer' sx={{ textDecoration: 'none' }}>
                <Card sx={card} key={index}>
                  <CardMedia
                    component='img'
                    height='100'
                    image={link.imageUrl}
                    alt={link.imageUrl}
                    style={{ objectFit: 'cover' }}
                  />
                </Card>
              </Link>
              <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>
                {link.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box display='flex' justifyContent='center' sx={{ marginTop: '2em' }}>
          <Pagination count={2} disabled />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LandingPageFeaturedLinks
