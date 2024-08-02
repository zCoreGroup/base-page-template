'use client'

import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Skeleton,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Navbar from '@/components/navbar/Navbar'
import colors from '@/design-tokens/colors'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import useSWR from 'swr'
import { FooterData, FooterLink, NavbarData, ProfilePageData } from '@/types'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import { fontSize } from '@mui/system'
import ProfilePageSkeleton from '@/app/profile/components/ProfilePageSkeleton'

export const dynamic = 'force-dynamic'

// Fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface ProfileData {
  name: string
  email: string
  phone: string
  base: string
  location: {
    state: string
    city: string
  }
  unit: string
  dutyTitle: string
  rank: string
  occupation: string
}

const ProfilePage = () => {
  const { data, error, isLoading } = useSWR<ProfilePageData>('/api/profile', fetcher)

  const [profile, setProfile] = useState<ProfileData>({
    name: 'Bailey Bootbuilder',
    email: 'bailey.bootbuilder.4@spaceforce.mil',
    phone: '555-5555',
    base: 'Vandenberg Space Force Base',
    location: {
      state: 'Washington D.C.',
      city: 'Washington D.C.',
    },
    unit: '000',
    dutyTitle: 'Name of Duty',
    rank: 'Name of rank',
    occupation: 'Name of occupation',
  })

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const baseOptions = [
    'Vandenberg Space Force Base',
    'Patrick Space Force Base',
    'Schriever Space Force Base',
    // Add more base options as needed
  ]

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleBaseChange = (newBase: string) => {
    setProfile({ ...profile, base: newBase })
    handleClose()
  }

  if (error) {
    throw error
  }

  if (isLoading) {
    return <ProfilePageSkeleton />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: colors.m3SysLightBackground,
      }}
    >
      <Navbar data={data!.navbar} />
      <Container maxWidth='lg'>
        <Box sx={{ mt: 6 }}>
          <Typography variant='h1' gutterBottom style={{ fontSize: 40, fontWeight: 'bold' }}>
            Profile
          </Typography>
        </Box>

        {/* Profile Section */}
        <Box sx={{ mt: 6, mb: 3 }}>
          <Grid container spacing={4}>
            {/* Left column - Avatar */}
            <Grid item xs={12} sm={2}>
              <Avatar sx={{ width: 120, height: 120 }} />
            </Grid>

            {/* Right column - Form fields */}
            <Grid item xs={12} sm={10}>
              <Grid container spacing={2}>
                {/* Full width fields */}
                {[{ label: 'Display Name', value: profile.name }].map((field) => (
                  <Grid item xs={12} key={field.label}>
                    <TextField
                      fullWidth
                      variant={'standard'}
                      label={field.label}
                      value={field.value}
                      InputProps={{
                        endAdornment: (
                          <IconButton size='small'>
                            <EditIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                ))}

                {/* Two-column fields */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant={'standard'}
                    label='Email'
                    value={profile.email}
                    InputProps={{
                      endAdornment: (
                        <IconButton size='small'>
                          <EditIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant={'standard'}
                    label='Phone'
                    value={profile.phone}
                    InputProps={{
                      endAdornment: (
                        <IconButton size='small'>
                          <EditIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                {/* Base selection with menu */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant='standard'
                    label='Your Base'
                    value={profile.base}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <IconButton size='small' onClick={handleClick}>
                          <ArrowDropDownIcon />
                        </IconButton>
                      ),
                    }}
                  />
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {baseOptions.map((option) => (
                      <MenuItem key={option} onClick={() => handleBaseChange(option)}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth variant={'standard'} label='Unit' value={profile.unit} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth variant={'standard'} label='Duty' value={profile.dutyTitle} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth variant={'standard'} label='Rank' value={profile.rank || 'Name of rank'} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant={'standard'}
                    label='Occupation'
                    value={profile.occupation || 'Name of occupation'}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Location Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h6' gutterBottom sx={{ fontSize: '1.375rem' }}>
            Location
          </Typography>
          <Grid container spacing={2} direction={'row'} sx={{ pl: 2 }}>
            <Grid item xs={6}>
              <TextField fullWidth variant={'standard'} label='State' value={profile.location.state} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth variant={'standard'} label='City' value={profile.location.city} />
            </Grid>
          </Grid>
        </Box>

        {/* Notifications Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h6' gutterBottom sx={{ fontSize: '1.375rem' }}>
            Notifications
          </Typography>
          <List>
            {['Launches', 'Space Force News', 'Photos', 'Articles', 'Comments'].map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
                <Switch />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Linked Family Members Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h6' gutterBottom sx={{ fontSize: '1.375rem' }}>
            Linked Family Members
          </Typography>
          <List>
            {['Name 1', 'Name 2', 'Name 3'].map((name) => (
              <ListItem key={name}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
          <TextField fullWidth variant={'standard'} label='Email' placeholder='email here...' margin='normal' />
          <Grid container spacing={2} justifyContent={'flex-end'}>
            <Grid item>
              <Button variant='outlined'>Cancel</Button>
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary'>
                Invite
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Portal Appearance Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h6' gutterBottom sx={{ fontSize: '1.375rem' }}>
            Portal Appearance
          </Typography>
          <RadioGroup defaultValue='light'>
            <Grid container spacing={2}>
              {['Light', 'Dark', 'Mars'].map((theme) => (
                <Grid item key={theme}>
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={`/images/${theme.toLowerCase()}-mode-icon.svg`}
                      alt={`${theme} theme`}
                      width={90}
                      height={90}
                    />
                    <Radio value={theme.toLowerCase()} />
                    <Typography variant='body2'>{theme}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button variant='outlined' sx={{ width: '100%' }}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='contained' color='primary' sx={{ width: '100%' }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer data={data!.footer} />
    </Box>
  )
}

export default ProfilePage
