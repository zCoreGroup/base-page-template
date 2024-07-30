import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material'
import { FooterLink } from '@/types'
import { content, contentTitle } from './style'

interface FooterLinksProps {
  title: string
  links: FooterLink[]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  // Split links into two columns with a max of 5 links each
  const column1 = links.slice(0, 5)
  const column2 = links.slice(5, 10)

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
      <Typography variant='h6' gutterBottom style={contentTitle}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {column1.map((link) => (
            <Typography key={link.url} style={content}>
              <Link href={link.url} target='_blank' color='inherit' underline='none'>
                {link.name}
              </Link>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          {column2.map((link) => (
            <Typography key={link.url}>
              <Link href={link.url} target='_blank' color='inherit' underline='none'>
                {link.name}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterLinks
