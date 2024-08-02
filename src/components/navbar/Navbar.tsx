import React from 'react'
import Image from 'next/image'
import { AppBar, Toolbar, Box, IconButton, Badge, Typography, Grid } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { NavbarData } from '@/types'
import { m3MobileLabelMedium } from '@/design-tokens/typography'
import colors from '@/design-tokens/colors'

const Navbar: React.FC<{ data: NavbarData }> = ({ data }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item xs={2}>
            {/* Empty grid item to push the center box to the middle */}
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
              }}
            >
              {data.leftLinks.map((link, index) => (
                <a key={index} href={link.url} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography
                    variant='body1'
                    sx={{ color: colors.m3SysLightInverseSurface, fontSize: m3MobileLabelMedium.font.size }}
                  >
                    {link.name}
                  </Typography>
                </a>
              ))}
              <Image
                src={'/assets/guardian_one_logo_wordMark.svg'}
                alt={data.logoAlt}
                width={280.7}
                height={24}
                color={'green'}
                style={{ color: 'green' }}
              />
              {data.rightLinks.map((link, index) => (
                <a key={index} href={link.url} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant='body1' sx={{ color: colors.m3SysLightInverseSurface, fontSize: '14px' }}>
                    {link.name}
                  </Typography>
                </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '24px',
              }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={data.notificationsCount} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
