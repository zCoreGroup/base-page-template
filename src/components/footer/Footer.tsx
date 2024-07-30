import React from 'react'
import { Grid, Typography, Box, Link } from '@mui/material'
import { Facebook, Instagram, YouTube } from '@mui/icons-material'
import X from '@mui/icons-material/X' // Import X icon
import { FooterData } from '@/types'
import { content, contentTitle, footerContentStyle } from './style'
import FooterLinks from './FooterLinks'

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  const informationText = data.informationText.split('\n')
  const addressText = encodeURIComponent(data.streetAddress + ', ' + data.city + ', ' + data.state + ' ' + data.zip)
  const addressHref = `https://www.google.com/maps/search/?api=1&query=${addressText}`
  const currentYear = new Date().getFullYear().toString()

  return (
    <Box sx={footerContentStyle}>
      <Grid container spacing={4} direction='row' justifyContent='center' alignItems='flex-start' maxWidth="90%">
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
                <Typography variant='h6' gutterBottom sx={contentTitle}>
                  Locations
                </Typography>
                <Link href={addressHref} target='_blank' color='inherit' underline='none'>
                  <Typography flexGrow={1} sx={content}>
                    {data.streetAddress}
                  </Typography>
                  <Typography flexGrow={1} sx={content}>
                    {data.city} {data.state} {data.zip}
                  </Typography>
                </Link>
                <Typography flexGrow={1} sx={content}>
                  <Link href={`mailto:${data.email}`} color='inherit' underline='none'>
                    {data.email}&nbsp;
                  </Link>
                  <Link href={`tel:${data.phone}`} color='inherit' underline='none'>
                    {data.phone}
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
                <Typography variant='h6' gutterBottom sx={contentTitle}>
                  {data.informationTitle}
                </Typography>
                {informationText.map((text) => (
                  <Typography key={text} sx={content}>
                    {text}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
            <Typography variant='h6' gutterBottom sx={contentTitle}>
              Base Map
            </Typography>
            <Box component='img' src={data.baseMapImage} width='100%' height='auto' alt='Base Map' />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            height='100%'
            gap={{ xs: 2, sm: 3, md: 6 }}
          >
            <FooterLinks title='Quick Links' links={data.quickLinks} />
            <FooterLinks title='Guardian Portal' links={data.guardianPortal} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            height='100%'
            gap={{ xs: 2, sm: 3, md: 6 }}
          >
            <Box display='flex' flexDirection='column' alignItems='flex-start'>
              <Typography variant='h6' gutterBottom sx={contentTitle}>
                Get Connected
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href={data.linkFB} target='_blank' color='inherit'>
                  <Facebook />
                </Link>
                <Link href={data.linkX} target='_blank' color='inherit'>
                  <X />
                </Link>
                <Link href={data.linkIG} target='_blank' color='inherit'>
                  <Instagram />
                </Link>
                <Link href={data.linkYT} target='_blank' color='inherit'>
                  <YouTube />
                </Link>
              </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='flex-start'>
              <Typography variant='h6' gutterBottom sx={contentTitle}>
                Got Feedback?
              </Typography>
              <br />
              <Typography sx={content}>{data.feedback}</Typography>
              <Typography sx={content}>&copy;{currentYear} All rights reserved, USSF Portal</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
