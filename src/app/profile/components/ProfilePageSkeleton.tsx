// ProfilePageSkeleton.tsx
import React from 'react'
import { Box, Container, Grid, List, ListItem, Skeleton } from '@mui/material'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import colors from '@/design-tokens/colors'
import { NavbarData, FooterData } from '@/types'

const defaultNavbarData: NavbarData = {
  leftLinks: [],
  rightLinks: [],
  logo: '',
  logoAlt: '',
  notificationsCount: 4,
  user: {
    name: 'Bailey Bootbuilder',
    avatarUrl: '',
  },
}

const defaultFooterData: FooterData = {
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
  informationTitle: '',
  informationText: '',
  linkFB: '',
  linkX: '',
  linkIG: '',
  linkYT: '',
  baseMapImage: '',
  quickLinks: [],
  guardianPortal: [],
  feedback: '',
}

const ProfilePageSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: colors.m3SysLightBackground,
      }}
    >
      <Navbar data={defaultNavbarData} />
      <Container maxWidth='lg'>
        <Box sx={{ mt: 6 }}>
          <Skeleton variant='text' width={200} height={60} />
        </Box>

        {/* Profile Section */}
        <Box sx={{ mt: 6, mb: 3 }}>
          <Grid container spacing={4}>
            {/* Left column - Avatar */}
            <Grid item xs={12} sm={2}>
              <Skeleton variant='circular' width={120} height={120} />
            </Grid>

            {/* Right column - Form fields */}
            <Grid item xs={12} sm={10}>
              <Grid container spacing={2}>
                {[...Array(8)].map((_, index) => (
                  <Grid item xs={index < 2 ? 12 : 6} key={index}>
                    <Skeleton variant='text' width='100%' height={40} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Location Section */}
        <Box sx={{ mb: 3 }}>
          <Skeleton variant='text' width={150} height={40} />
          <Grid container spacing={2} direction={'row'} sx={{ pl: 2 }}>
            <Grid item xs={6}>
              <Skeleton variant='text' width='100%' height={40} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant='text' width='100%' height={40} />
            </Grid>
          </Grid>
        </Box>

        {/* Notifications Section */}
        <Box sx={{ mb: 3 }}>
          <Skeleton variant='text' width={150} height={40} />
          <List>
            {[...Array(5)].map((_, index) => (
              <ListItem key={index}>
                <Skeleton variant='text' width='80%' height={40} />
                <Skeleton variant='rectangular' width={40} height={20} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Linked Family Members Section */}
        <Box sx={{ mb: 3 }}>
          <Skeleton variant='text' width={200} height={40} />
          <List>
            {[...Array(3)].map((_, index) => (
              <ListItem key={index}>
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='text' width='80%' height={40} sx={{ ml: 2 }} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Portal Appearance Section */}
        <Box sx={{ mb: 3 }}>
          <Skeleton variant='text' width={200} height={40} />
          <Grid container spacing={2}>
            {[...Array(3)].map((_, index) => (
              <Grid item key={index}>
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Skeleton variant='rectangular' width={90} height={90} />
                  <Skeleton variant='circular' width={20} height={20} sx={{ mt: 1 }} />
                  <Skeleton variant='text' width={60} height={20} sx={{ mt: 1 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer data={defaultFooterData} />
    </Box>
  )
}

export default ProfilePageSkeleton
