'use client'

import React, { useEffect, useState } from 'react'
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
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Navbar from '@/components/navbar/Navbar'
import ProfilePageDataFetcher from '@/app/profile/dataFetcher'
import colors from '@/design-tokens/colors'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ProfilePageData } from '@/types'

export const dynamic = 'force-dynamic'

const fetcher = ProfilePageDataFetcher.getInstance()

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
  const [data, setData] = useState<ProfilePageData | null>(null)
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher.fetch()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle error state here
      }
    }
    fetchData().then((r) => console.log(r))
  }, [])

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

  if (!data) {
    return <div>Loading...</div>
  }

  // @ts-ignore
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100 }}>
        <Navbar data={data.navbar} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          mt: '72px', // Adjust this value based on your NavBar height
          backgroundColor: colors.m3SysLightBackground,
        }}
      >
        <Container maxWidth='xl'>
          <Typography variant='h4' gutterBottom>
            Profile
          </Typography>

          {/* Profile Section */}
          <Box sx={{ mb: 3 }}>
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
            <Typography variant='h6' gutterBottom>
              Location
            </Typography>
            <TextField fullWidth label='State' value={profile.location.state} margin='normal' />
            <TextField fullWidth label='City' value={profile.location.city} margin='normal' />
          </Box>

          {/* Notifications Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant='h6' gutterBottom>
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
            <Typography variant='h6' gutterBottom>
              Linked Family Members
            </Typography>
            <List>
              {['Name 1', 'Name 2', 'Name 3'].map((name) => (
                <ListItem key={name}>
                  <ListItemAvatar>
                    <Avatar>{name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
            <TextField fullWidth label='Email' placeholder='email here...' margin='normal' />
            <Button variant='contained' color='primary'>
              Invite
            </Button>
          </Box>

          {/* Portal Appearance Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant='h6' gutterBottom>
              Portal Appearance
            </Typography>
            <RadioGroup defaultValue='light'>
              <Grid container spacing={2}>
                {['Light', 'Dark', 'Mars'].map((theme) => (
                  <Grid item key={theme}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: theme === 'Light' ? '#f5f5f5' : theme === 'Dark' ? '#333' : '#c1440e',
                          mb: 1,
                        }}
                      />
                      <Radio value={theme.toLowerCase()} />
                      <Typography variant='body2'>{theme}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
            <Button variant='contained' color='primary' sx={{ mt: 2 }}>
              Save
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ProfilePage
